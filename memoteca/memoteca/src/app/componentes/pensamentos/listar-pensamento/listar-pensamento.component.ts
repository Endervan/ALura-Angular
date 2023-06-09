import {Component, OnInit} from '@angular/core';
import {Pensamento} from "../../../model/pensamento";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private servPensamento:PensamentoService) {
  }

  ngOnInit(): void {
    this.servPensamento.listar().subscribe((res)=>{
      if (res) this.listaPensamentos = res;
    });
  }

}
