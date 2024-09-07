import {inject, Injectable, signal} from '@angular/core';
import {BehaviorSubject, Observable, shareReplay, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
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


  // get
  #setListTask = signal<ITask[] | null>(null);
  public getListTask = this.#setListTask.asReadonly() // get asReadonly somente leitura
  public httTaskList$(): Observable<ITask[]> {
    this.#setListTask.set(null); // zera  a lista pra chamar o reload
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res) => this.#setListTask.set(res)) // serve para conectar as informações para RXJS
    )
  }

  // map() -> pode altera dados RXJS


  // get ID
  #setListTaskId = signal<ITask | null>(null);

  get getListTaskId() {
    return this.#setListTaskId.asReadonly()
  }

  public httpListTaskId$(id: string): Observable<ITask> {
    this.#setListTask.set(null); // zera  a lista pra chamar o reload
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res) => this.#setListTaskId.set(res)) // serve para conectar as informações para RXJS
    )
  }

// constructor( ) { }


  // create
  public httpTaskCreate$(title: string): Observable<ITask> {
    return this.#http.post<ITask>(this.#url(), {title})
      .pipe(shareReplay() // ajuda a evita multi caches
      )
  }

// update
  public httpTaskUpdate$(id: string, title: string): Observable<ITask> {
    return this.#http.patch<ITask>(`${this.#url()}/${id}`, {title})
      .pipe(shareReplay(), // ajuda a evita multi caches
      )
  }


// delete
  public httpTaskDelete$(id: string): Observable<void> {
    return this.#http.delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay(), // ajuda a evita multi caches
      )
  }

}
