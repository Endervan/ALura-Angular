import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `111<router-outlet />`
})
export class AppComponent {
  title = 'lista-de-tarefas';
}
