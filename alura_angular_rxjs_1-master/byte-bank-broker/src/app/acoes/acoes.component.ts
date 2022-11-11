import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AcoesService} from './acoes.service';
import {Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent  {
  acoesInput = new FormControl();
  // acoes$ =  this.acoesService.getAcoes();
  acoes$ = this.acoesInput.valueChanges.pipe(tap(console.log));
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
