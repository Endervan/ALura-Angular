import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsuarioService} from "./usuario/usuario.service";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) {
  }

  // Observable => pega somente body da requisição
  // HttpResponse<any => pega body e headers (requisao inteira)
  autentica(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post('http://localhost:3000/user/login',
      {
        userName: usuario,
        password: senha
      }, {observe: 'response'} // deixa esse option para avisa pro angular pega a requisição inteira
    ).pipe( // fazer operação do observable retornado
      tap((res) => { // operação pega token no headers
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken)
      })
    )
  }
}
