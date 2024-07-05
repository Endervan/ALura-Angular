import {Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  public firstName = signal('Ender');
  public lastName = signal('Alves');

  public fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  })

  public array = signal([1]);

  // effect - raramente sao necessarios na maioria dos codigos
  // ex: registro de dados sendo exibindo e qnd eles mudam , seja por anlise
  // ex: manter dados sicronizados com window.localStorage
  // ex: adiciona comportamento DOM personalizado
  // ex: executar renderização personalizada em um <canvas> biblioteca de graficos ou UI terceiros

  constructor() {
    effect(() => {
      console.log(this.firstName());
      console.log(this.array());
    });
  }

  public updateName() {
    return this.firstName.set("João set")
  }

  public updateArray() {
    this.firstName.update(() => {
      return "João"
    })


    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    })
  }

}
