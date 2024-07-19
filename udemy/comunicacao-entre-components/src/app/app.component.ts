import {Component} from '@angular/core';
import {PaiOuMaeComponent} from "./components/comuniccao-entre-components/pai-ou-mae/pai-ou-mae.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaiOuMaeComponent],
  template: `
<!--<router-outlet />-->

<h1>Cominicação entre components</h1>

<app-pai-ou-mae />
`,
})
export class AppComponent {
  title = 'comunicacao-entre-components';
}
