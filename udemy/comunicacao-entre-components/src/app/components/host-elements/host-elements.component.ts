import {Component, HostBinding, HostListener} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  // host: { // --------------------------------------> somente nas versoes novas
  //   role: 'button',
  //   '[attr.class]': 'class',
  //   '(document:keypress)': 'updateHostListener($event)',
  //   '(click)': 'updateClick()',
  // }
})
export class HostElementsComponent {


  @HostBinding('attr.class')  //  HostBinding => versao mais antiga
  public class = 'vida fullstack';

  // host adiciona atributos no elemento

  @HostListener('document:keypress',['$event'])  //  HostBinding => versao mais antiga
  public updateHostListener(envet:KeyboardEvent) {
    console.log(envet)
  }

  @HostListener('click') //  HostBinding => versao mais antiga
  public updateClick() {
    alert("ender host")
  }
}
