import {Component, EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.scss']
})

export class NovaTransferenciaComponent {
  // aoTransferir objeto criado
  // new EventEmitter => propagar os dados

  @Input() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  transferir() {
    const valorEmitido = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitido);
    console.log();
  }
}


