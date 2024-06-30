import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {NewComponent} from "./components/new-component/new-component.component";
import {TemplateBindingComponent} from "./template/template-binding/template-binding.component";
import {TemplateVariablesComponent} from "./components/template/template-variables/template-variables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent],
  template: `
    <!--  <router-outlet></router-outlet>-->
    <h1>Curso de ANGULAr</h1>
    <app-template-variables/>
    <p>Components</p>
    <app-template-binding/>
    <div class="theme-red">
      <app-new-component/>
    </div>
  `,
})
export class AppComponent {

}
