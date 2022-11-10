import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, pluck, tap} from 'rxjs/operators';
import {Acao} from './modelo/acoes';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private httpClient: HttpClient) {
  }

  getAcoes() {
    // map altera fluxo informaçes apresentadas
    // sort ordenacao array
    return this.httpClient.get<any>('http://localhost:3000/acoes').pipe(
      tap((valor) => console.log(valor)), // tap verificando como ta fluxo
      pluck('payload') , // faz msm coisa map  ===  map((api) => api.payload),
      map((acoes) => acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB)))
    );
  }


  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA.codigo > acaoB.codigo) {
      return 1;
    } else if (acaoA.codigo < acaoB.codigo) {
      return -1;
    } else {
      return 0;
    }
  }
}
