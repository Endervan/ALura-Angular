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


  #setListTask = signal<ITask[] | null>(null);
  public getListTask = this.#setListTask.asReadonly() // get asReadonly somente leitura

  public httpListTask$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(), // ajuda a evita multi caches
      tap((res)=> this.#setListTask.set(res)) // serve para conectar as informações para RXJS
    )
  }

  // map() -> pode altera dados RXJS

// constructor( ) { }
}
