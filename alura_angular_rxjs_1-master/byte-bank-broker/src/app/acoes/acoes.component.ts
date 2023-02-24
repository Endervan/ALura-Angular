import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AcoesService} from './acoes.service';
import {merge, of, Subscription} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, filter, switchMap, tap} from 'rxjs/operators';

const ESPERA_DIGITACAO = 300;

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
    debounceTime(ESPERA_DIGITACAO), // monta limite pra proxima digitacao
    tap(() => console.log('fluxo filtro')),
    tap(() => console.log),
    filter((valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length),
    distinctUntilChanged(), // n faz requisiçoes caso digitacao informada seja msm anterior
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)),
    catchError(_ => of('no more requests!!!'))
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
