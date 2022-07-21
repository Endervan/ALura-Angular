import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TransferenciaModel} from '../model/transferenciaModel';

@Injectable({
  providedIn: 'root' // root disponivel enq a app estive ativo
})
export class TransferenciaService {

  private listaTransferencia: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
  }

  // get transferencias() {
  //   return this.listaTransferencia;
  // }

  // pegando todas as transferencias
  todas(): Observable<TransferenciaModel[]> {
    return this.httpClient.get<TransferenciaModel[]>(this.url);

  }

  adicionar(transferencia: TransferenciaModel): Observable<TransferenciaModel> {
    this.hidratar(transferencia);
    // this.listaTransferencia.push(transferencia);
    return this.httpClient.post<TransferenciaModel>(this.url, transferencia); // tipo post
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();

  }

}
