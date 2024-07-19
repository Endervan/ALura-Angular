import {Component, Input, signal} from '@angular/core';


function toUpperCase(value: string): string {
  return value.toUpperCase();
}
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  public name = signal("sem Dados");

  @Input({
    // alias:"abacaxi", // nome do proprio input = antes era inputName e agora e abacaxi
    required:true, // obrigar a tags ter input name
    transform:toUpperCase // transforma dados caso precise
  }) set inputName (value: string) {
    this.name.set(value)
  }

}
