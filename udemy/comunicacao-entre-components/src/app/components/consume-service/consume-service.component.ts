import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {NewComponentComponent} from "@components/new-component/new-component.component";
import {ApiService} from "@services/api.service";

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [
    NewComponentComponent
  ],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {


  #apiService = inject(ApiService); // injeção depedencia nova
  // constructor(private _api: ApiService) { // injeção depedencia antiga
  // }

  public getTask = signal<null | Array<{ id: string, title: string }>>(null)

  ngOnInit(): void {
    // console.log(this.#apiService.name());
    //
    // this.#apiService.name$.subscribe({
    //   next: (next) => console.log(next),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('complete'),
    // })

    this.#apiService.httpListTask$().subscribe({
      next: (next) => {
        console.log(next)
        this.getTask.set(next)
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    })

  }

}
