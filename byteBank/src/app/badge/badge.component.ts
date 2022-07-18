import {Component, Input, OnInit} from '@angular/core';
import {FiltroService} from '../service/filtro.service';

@Component({
  selector: 'ngav-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  // usando @Input
  @Input() badges: any[];

  // usabando servico
  // badges: any[];

  constructor(private filtroService: FiltroService) {
  }

  ngOnInit(): void {
    // this.badges = this.filtroService.filtroBadges;
  }

}
