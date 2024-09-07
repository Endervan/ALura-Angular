import {inject, Injectable, signal} from '@angular/core';
import {BehaviorSubject, catchError, Observable, shareReplay, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "@environments/environment";

interface ITask {
  id: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //formato antigo como observable
  public name$ = new BehaviorSubject<string>("ender service BehaviorSubject $");


  // formato novo
  public name = signal('ender service');


  #http = inject(HttpClient);
  #url = signal(environment.apiTask);


  // get ///////////////////////////////////////////////////////////////////////////////
  #setListTask = signal<ITask[] | null>(null);
  public getListTask = this.#setListTask.asReadonly() // get asReadonly somente leitura

 #setListTaskError = signal<ITask[] | null>(null);
  public getListTaskError = this.#setListTaskError.asReadonly();


  public httTaskList$(): Observable<ITask[]> {
    this.#setListTask.set(null); // zera  a lista pra chamar o reload
    this.#setListTaskError.set(null);

    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res) => this.#setListTask.set(res)), // serve para conectar as informações para RXJS
      catchError((error: HttpErrorResponse) => {
        this.#setListTaskError.set(error.error.message);
        return throwError(() => error);
      })
    )
  }

  // map() -> pode altera dados RXJS


  // get ID com erros ///////////////////////////////////////////////////////////////////////////////////////
  #setListTaskIdError = signal<ITask | null>(null);
  get getTaskIdError() {
    return this.#setListTaskIdError.asReadonly()
  }
  #setListTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setListTaskId.asReadonly()
  }
  public httpListTaskId$(id: string): Observable<ITask> {
    this.#setListTask.set(null); // zera  a lista pra chamar o reload
    this.#setListTaskIdError.set(null); // zera  a lista pra chamar o reload

    this.#setListTask.set(null); // zera  a lista pra chamar o reload
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res) => this.#setListTaskId.set(res)), // serve para conectar as informações para RXJS
      catchError((error: HttpErrorResponse) => {
        this.#setListTaskIdError.set(error.error.message);
        return throwError(() => error);
      })
    )
  }

// constructor( ) { }


  // create
  #setTaskCreateError = signal<ITask | null>(null);
  get getTaskCreateError() {
    return this.#setTaskCreateError.asReadonly()
  }
  public httpTaskCreate$(title: string): Observable<ITask> {
    this.#setTaskCreateError.set(null);
    return this.#http.post<ITask>(this.#url(), {title})
      .pipe(shareReplay(), // ajuda a evita multi caches
        catchError((error: HttpErrorResponse) => {
          this.#setTaskCreateError.set(error.error.message);
          return throwError(() => error);
        })
      )
  }

// update
  #setListTaskUpdateError = signal<ITask | null>(null);
  get getTaskUpdateError() {
    return this.#setListTaskUpdateError.asReadonly()
  }
  public httpTaskUpdate$(id: string, title: string): Observable<ITask> {
    this.#setListTaskUpdateError.set(null);
    return this.#http.patch<ITask>(`${this.#url()}/${id}`, {title})
      .pipe(shareReplay(), // ajuda a evita multi caches
        catchError((error: HttpErrorResponse) => {
          this.#setListTaskUpdateError.set(error.error.message);
          return throwError(() => error);
        })
      )
  }


// delete
  #setListTaskDeleteError = signal<ITask | null>(null);
  get getTaskDeleteError() {
    return this.#setListTaskDeleteError.asReadonly()
  }
  public httpTaskDelete$(id: string): Observable<void> {
    return this.#http.delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay(), // ajuda a evita multi caches
        catchError((error: HttpErrorResponse) => {
          this.#setListTaskDeleteError.set(error.error.message);
          return throwError(() => error);
        })
      )
  }

}
