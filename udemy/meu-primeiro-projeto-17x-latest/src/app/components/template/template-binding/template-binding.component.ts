import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {

  public name = 'Ender Ximenes';
  public age = 32;
  public isDisabled = true;
  isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

  sumEvent() {
    return this.age++
  }

  subEvent() {
    return this.age--
  }


 public onKeyDown(event: Event) {
     return console.log(event)
  }

  public onMouseEvent(event:MouseEvent){
    return console.log({
      clientX:event.clientX,
      clienteY:event.clientY
    })
  }
}
