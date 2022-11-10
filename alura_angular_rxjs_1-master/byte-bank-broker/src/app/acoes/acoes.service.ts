import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private httpClient: HttpClient) {
  }

  getAcoes(){
    return this.httpClient.get<any>('https://localhost:3000/acoes');
  }
}
