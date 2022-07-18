import {Component, Input} from '@angular/core';
import {FiltroService} from './service/filtro.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byteBank';
  // transferiencia: any[] = [];
  @Input() filtro: any[] = [];
  //
  //
  // transferirBadge = $event => {
  // ...$event estamos descontruindo o bojeto para pega somentes seus valores

  // }

  constructor(private filtroService: FiltroService) {
  }

  // usando service
  // transferir = $event => {
  //   this.service.adicionar($event);
  //   // this.filtroService.adicionarFiltro($event);
  //
  //   // const filtro = {...$event, data: new Date()};
  //   // this.filtro.push(filtro);
  // };
  // usando service filtroService
  // transferir = $event => {
  //
  // }

}
