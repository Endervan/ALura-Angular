import {Component} from '@angular/core';
import {AsyncPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],// Forma nova. Forma antiga so chamar CommoModule ja contem tudo
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = true;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
    'item 4',
  ]).pipe(delay(3000));
  switchCondicion: string = 'Afff';
  protected itens: Array<{ name: string }> = [{name: 'Ender Scopel'}]

  addNewName(value: string) {
    return this.itens.push({name: value})
  }
}
