import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
 name = new FormControl('Ender react');
}
