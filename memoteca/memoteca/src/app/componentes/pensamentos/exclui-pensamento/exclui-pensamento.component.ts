import {Component, OnInit} from '@angular/core';
import {PensamentoService} from "../pensamento.service";
import {Pensamento} from "../../../model/pensamento";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-exclui-pensamento',
  templateUrl: './exclui-pensamento.component.html',
  styleUrls: ['./exclui-pensamento.component.css']
})
export class ExcluiPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }


  constructor(private service: PensamentoService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }


  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamentos'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }
}
