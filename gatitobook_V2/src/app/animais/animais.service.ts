import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {environment} from 'src/environments/environment';
import {TokenService} from '../autenticacao/token.service';
import {Animais, Animal} from './animais';
import {catchError, mapTo} from 'rxjs/operators';

const API = environment.apiURL;
const NOT_MODIFILD = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  excluiAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.http.post(`${API}/photos/${id}/like`, {}, {observe: 'response'})
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFILD ? of(false) : throwError(error);
        })
      );
  }

  upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData(); // new FormData podemos manda arquivos na requisicao
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true// parte mostra como ta envio atraves da requisição
    });

  }


}
