import {Component} from '@angular/core';
import {PaiOuMaeComponent} from "./components/comuniccao-entre-components/pai-ou-mae/pai-ou-mae.component";
import {AngularPipesComponent} from "./components/comuniccao-entre-components/pipes/angular-pipes/angular-pipes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaiOuMaeComponent, AngularPipesComponent],
  template: `
    <!--<router-outlet />-->

    <h1>Cominicação entre components</h1>

    <!--<app-pai-ou-mae />-->

    <app-angular-pipes/>
  `,
})
export class AppComponent {
  title = 'comunicacao-entre-components';
}
