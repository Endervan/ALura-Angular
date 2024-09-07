import {HttpErrorResponse, HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {catchError, retry, shareReplay, throwError} from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const headers = new HttpHeaders().set('front_111', 'dev');
 const reqClone = req.clone({headers})
  return next(req).pipe(
    shareReplay(),// ajuda a evita multi caches
    retry({count: 2, delay: 1000}), // caso ocorra algum erro na requisicao ele tenta 2 vez com intervalo de 1 segundo
    catchError((error: HttpErrorResponse) => {
      return throwError(() => error);
    })
  )
};
