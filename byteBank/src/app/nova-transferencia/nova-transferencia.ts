import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.scss']
})

export class NovaTransferenciaComponent {
  // aoTransferir objeto criado
  // new EventEmitter => propagar os dados

  @Output() aoTransferir = new EventEmitter<any>();

  valor = 0;
  destino = '';

  transferir = () => {
    console.log('Solicitada nova transferência');
    const valorEmitido = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitido);
    this.limpar(); // limpa os campos
  };

  limpar = () => {
    this.valor = 0;
    this.destino = null;
  };

}


