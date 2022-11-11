import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AcoesService} from './acoes.service';
import {merge, Subscription} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  todaAcoes$ = this.acoesService.getAcoes().pipe(tap(() => console.log('fluxo original'))); // pega todos os arrays original
  // acoes$ =  this.acoesService.getAcoes().pipe();

  // usando input como observable
  filterPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => console.log('fluxo filtro')),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );

  // merge rxJX recebe n observables
  acoes$ = merge(this.todaAcoes$, this.filterPeloInput$);
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
