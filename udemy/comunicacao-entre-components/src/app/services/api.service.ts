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
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res)=> this.#setListTask.set(res)) // serve para conectar as informações para RXJS
    )
  }

  // map() -> pode altera dados RXJS


  // get ID
  #setListTaskId = signal<ITask | null>(null);
  get  getListTaskId (){
    return this.#setListTaskId.asReadonly()
  }
  public httpListTaskId$(id:string): Observable<ITask> {
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res)=> this.#setListTaskId.set(res)) // serve para conectar as informações para RXJS
    )
  }

// constructor( ) { }


  // create
  #setTaskCreate = signal<ITask | null>(null);
  get  getTaskCreate (){
    return this.#setTaskCreate.asReadonly()
  }
  public httpTaskCreate$(title:string): Observable<ITask> {
    return this.#http.post<ITask>(this.#url(),{title}).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res)=> this.#setTaskCreate.set(res)) // serve para conectar as informações para RXJS
    )
  }

// update
  #setTaskUpdate = signal<ITask | null>(null);
  get  getTaskUpdate (){
    return this.#setTaskUpdate.asReadonly()
  }
  public httpTaskUpdate$(id:string,title:string): Observable<ITask> {
    return this.#http.patch<ITask>(`${this.#url()}/${id}`,{title}).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res)=> this.#setTaskUpdate.set(res)) // serve para conectar as informações para RXJS
    )
  }

}
