import {Component} from '@angular/core';
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {delay, Observable, of} from "rxjs";
import {iterator} from "rxjs/internal/symbol/iterator";

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor],// Forma nova. Forma antiga so chamar CommoModule ja contem tudo
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


  protected readonly iterator = iterator;
}
