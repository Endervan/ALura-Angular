import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Acao} from '../modelo/acoes';

@Component({
  selector: 'app-card-acoes',
  templateUrl: './card-acoes.component.html',
  styleUrls: ['./card-acoes.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardAcoesComponent implements OnInit {
  @Input() acao: Acao;

  constructor() {}

  ngOnInit(): void {}
}
