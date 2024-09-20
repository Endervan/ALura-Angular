import {ChangeDetectionStrategy, Component, inject, Input, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servicos-prestados',
  standalone: true,
  imports: [],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ServicosPrestadosComponent implements OnInit {

  // forma mais nova
  public getId = signal<null | string>(null)
  #route = inject(ActivatedRoute); // serve para passar params
  #router = inject(Router);

  @Input() set id(id: string) {
    console.log("forma nova pega id ", id)
    this.getId.set(id);
  }


  ngOnInit(): void {
    console.log(this.#route.snapshot.params['id'])
    // outra forma busca params pela url
    this.#route.params.subscribe(params => console.log(params['id']));

    console.log("pegando do qurery params ", this.#route.snapshot.queryParams['name'])
    console.log("pegando do qurery params ", this.#route.snapshot.queryParams['age'])


    this.#route.queryParamMap.subscribe((res) => console.log("pegando direto peloqueryParamMap ", res.get('name')))
    this.#route.queryParamMap.subscribe({
      next: (next) => {
        console.log("pegando direto pelo queryParamMap pelo next", next.get('name'))
        console.log("pegando direto pelo queryParamMap pelo next", next.get('age'))
      },
    })

    setTimeout(()=>{
      // serve para fazer redirecionamento
      this.#router.navigate(['/cursos'])
    },3000)



  }
}
