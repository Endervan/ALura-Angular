import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AcoesService} from './acoes.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent  {
  acoesInput = new FormControl();
  acoes$ =  this.acoesService.getAcoes();
  private subscription: Subscription;

  constructor(private acoesService: AcoesService) {
  }

  // ngOnInit() {
  //   this.subscription = this.acoesService.getAcoes().subscribe((acoes) => {
  //     this.acoes$ = acoes;
  //   });
  // }
  //
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
