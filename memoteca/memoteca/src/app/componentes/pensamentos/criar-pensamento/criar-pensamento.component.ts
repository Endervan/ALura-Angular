import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(private router:Router,private service:PensamentoService) {

  }

  ngOnInit(): void {
  }

  criarPensamento() {
   this.service.criar(this.pensamento).subscribe(()=>{
     this.router.navigate(['/listarPensamentos']);
     alert("Pensamento Criado com sucesso")
   })
  }
  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }
}
