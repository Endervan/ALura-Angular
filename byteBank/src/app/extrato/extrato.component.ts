import {Component, OnInit} from '@angular/core';
import {TransferenciaService} from '../service/transferencia.service';
import {TransferenciaModel} from '../model/transferenciaModel';

@Component({
  selector: 'ender-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  // usando @input
  // @Input() transferiencias: any[];

  // usando service
  transferiencias: any[] = [];

  constructor(private service: TransferenciaService) {
  }


  ngOnInit(): void {
    // pegando variavel transferencia bem do get do service
    // this.transferiencias =  this.service.transferencias;

    // pegando valores servidor
    this.service.todas().subscribe((transferencias: TransferenciaModel[]) => {
      // formato de tabela
      console.table(transferencias);
      this.transferiencias = transferencias;
    });
  }

}
