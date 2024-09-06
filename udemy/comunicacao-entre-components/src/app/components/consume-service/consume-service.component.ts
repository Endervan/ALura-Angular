import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {NewComponentComponent} from "@components/new-component/new-component.component";
import {ApiService} from "@services/api.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

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

  public getTask$ = this.#apiService.httpListTask$();

  ngOnInit(): void {
    // console.log(this.#apiService.name());
    //
    // this.#apiService.name$.subscribe({
    //   next: (next) => console.log(next),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('complete'),
    // })

    this.getTask$.subscribe({
      next: (next) => {
        console.log(next)
        this.getTask.set(next)
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    })

  }

}
