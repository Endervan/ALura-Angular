import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <!--  <router-outlet></router-outlet>-->
    <h1>Curso de ANGULAr</h1>
    <p>Components</p>
  `,
})
export class AppComponent {

}
