import { Component } from '@angular/core';
import {NewComponent} from "../../new-component/new-component.component";

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [
    NewComponent
  ],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

}
