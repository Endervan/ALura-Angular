import {Component, OnInit} from '@angular/core';
import {Animais} from '../animais';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(private activedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // params tb e observable
    this.activedRoute.params.subscribe(params => {
      this.animais = this.activedRoute.snapshot.data['animais'];
    });
  }
}
