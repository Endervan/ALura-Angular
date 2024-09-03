import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ApiService} from "@services/api.service";

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewComponentComponent {
  #apiService = inject(ApiService);

  ngOnInit(): void {
    console.log(this.#apiService.name());

    this.#apiService.name$.subscribe({
      next: (next) => console.log(next),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    })

    this.#apiService.name$.next("$$$$$$$$");


    this.#apiService.name.set('modificando o signal')
    setTimeout(()=>{
      console.log(this.#apiService.name())
    },2000)

  }

}
