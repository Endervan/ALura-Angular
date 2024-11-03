import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-template-for',
  templateUrl: './ng-template-for.component.html',
  styleUrls: ['./ng-template-for.component.scss']
})
export class NgTemplateForComponent implements OnInit {

  public list = [
    {nome: 'alves'}
  ]
  public nome: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  salvar() {
    this.list.push({nome: this.nome});
    this.nome = '';
  }
}
