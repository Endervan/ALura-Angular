import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: "1",
    conteudo: "Aprendendo Angular",
    autoria: "Dev",
    modelo: ""
  }

  constructor(private router:Router) {

  }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("aqui")
  }
  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }
}
