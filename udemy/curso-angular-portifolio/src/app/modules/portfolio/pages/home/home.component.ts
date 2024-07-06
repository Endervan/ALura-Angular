import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {KnowledgeComponent} from "../../components/knowledge/knowledge.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
