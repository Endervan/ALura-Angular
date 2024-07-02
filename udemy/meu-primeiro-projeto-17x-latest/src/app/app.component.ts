import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {NewComponent} from "./components/new-component/new-component.component";
import {TemplateBindingComponent} from "./components/template/template-binding/template-binding.component";
import {TemplateVariablesComponent} from "./components/template/template-variables/template-variables.component";
import {TemplateControlFlowComponent} from "./components/template/template-control-flow/template-control-flow.component";
import {TemplateDeferrableViewsComponent} from "./components/template/template-deferrable-views/template-deferrable-views.component";
import {SignalsComponent} from "./components/signals/signals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent, SignalsComponent],
  template: `
    <!--  <router-outlet></router-outlet>-->
    <!--    <h1>Curso de ANGULAr</h1>-->
    <!--    <app-template-variables/>-->
    <!--    <p>Components</p>-->
    <!--    <app-template-binding/>-->
    <!--    <div class="theme-red">-->
    <!--      <app-new-component/>-->
    <!--    </div>-->
    <!--    <app-template-control-flow/>-->

<!--    <app-template-deferrable-views/>-->
    <app-signals/>
  `,
})
export class AppComponent {

}
