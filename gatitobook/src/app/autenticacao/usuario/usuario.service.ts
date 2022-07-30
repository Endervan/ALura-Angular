import {Injectable} from '@angular/core';
import {TokenService} from "../token.service";
import {Usuario} from "./usuario";
import jwt_decode from 'jwt-decode';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // BehaviorSubject => observable guarda ultimo estado
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT(); // ja possue o token aviso todo mundo
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;

    // enviando para todos componetes que estao usando este servico
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario() {
    // asObservable => so recebe a informação
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT(); // decodificar e enfim dados do token
  }

  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }




}
