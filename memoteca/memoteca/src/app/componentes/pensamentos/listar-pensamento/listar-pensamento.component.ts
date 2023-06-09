import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos =[{
    conteudo: 'I love Angular1111111111111',
    autoria: 'Nay',
    modelo: 'modelo3'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
