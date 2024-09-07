import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {NewComponentComponent} from "@components/new-component/new-component.component";
import {ApiService} from "@services/api.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [
    NewComponentComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {


  #apiService = inject(ApiService); // injeção depedencia nova
  // constructor(private _api: ApiService) { // injeção depedencia antiga
  // }

  public getTask = signal<null | Array<
    { id: string, title: string }>>(null);


  // toSignal -> transforma observable para um signal
  // public getTask$ = toSignal(this.#apiService.httpListTask$());

  public getListaTask = this.#apiService.getListTask;
  public getListTaskId = this.#apiService.getListTaskId;

  ngOnInit(): void {
    // console.log(this.#apiService.name());
    //
    // this.#apiService.name$.subscribe({
    //   next: (next) => console.log(next),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('complete'),
    // })

    // this.getTask$.subscribe({
    //   next: (next) => {
    //     console.log(next)
    //     this.getTask.set(next)
    //   },
    //   error: (err) => console.log(err),
    //   complete: () => console.log('complete'),
    // })

    this.#apiService.httTaskList$().subscribe()
    this.#apiService.httpListTaskId$('ZgNorQ6FMJkz0PNXftxl').subscribe()

  }

  // 1 forma -> this.#apiService.httpListTask$().subscribe()
  public httpTaskCreate(title: string) {
    return this.#apiService.httpTaskCreate$(title).subscribe({
      next: (next) => this.#apiService.httTaskList$().subscribe(), // forma menos usada chamando observable no next do create
      error: (error) => console.log(error)
    })
  }

  // 2 forma  create--> usando pipe e concatMap -> aconteceu a requisicao e vai garantir q posso chama outra requisição
  public httpTaskCreateConcatMap(title: string) {
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httTaskList$()))
      .subscribe()
  }

  public httpTaskUpdate(id:string,title: string) {
    return this.#apiService
      .httpTaskUpdate$(id,title)
      .pipe(concatMap(() => this.#apiService.httTaskList$()))
      .subscribe()
  }

}
