import {Component, computed, signal} from '@angular/core';
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
