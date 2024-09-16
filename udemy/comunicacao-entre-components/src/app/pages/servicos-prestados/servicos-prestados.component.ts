import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-servicos-prestados',
  standalone: true,
  imports: [],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicosPrestadosComponent  implements OnInit{

  #route = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(this.#route.snapshot.params['id'])
  }
}
