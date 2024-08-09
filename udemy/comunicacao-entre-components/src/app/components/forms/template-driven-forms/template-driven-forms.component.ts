import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {

  public listComidas = signal<Array<{ comida: string, preco: string }>>([
    {
      comida: 'x-salada', preco: '$RS 10'
    }, {
      comida: 'x-BACON', preco: '$RS 15'
    }, {
      comida: 'x-tudo', preco: '$RS 20'
    }
  ])

}
