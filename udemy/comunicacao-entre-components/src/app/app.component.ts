import {Component} from '@angular/core';
import {PaiOuMaeComponent} from "./components/comuniccao-entre-components/pai-ou-mae/pai-ou-mae.component";
import {AngularPipesComponent} from "./components/comuniccao-entre-components/pipes/angular-pipes/angular-pipes.component";
import {ReactiveFormsComponent} from "./components/forms/reactive-forms/reactive-forms.component";
import {TemplateDrivenFormsComponent} from "./components/forms/template-driven-forms/template-driven-forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaiOuMaeComponent, AngularPipesComponent, ReactiveFormsComponent, TemplateDrivenFormsComponent],
  template: `
    <!--<router-outlet />-->

<!--    <h1>comunicação entre components</h1>-->

    <!--<app-pai-ou-mae />-->

<!--    <app-angular-pipes/>-->

    <h1>tipos forms(drive and reactive)</h1>

<!--    <app-template-driven-forms/>-->
    <app-reactive-forms/>
  `,
})
export class AppComponent {
  title = 'comunicacao-entre-components';
}
