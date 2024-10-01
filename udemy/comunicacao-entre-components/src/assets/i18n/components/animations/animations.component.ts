import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('move-ball', [
      state('move-left', style({transform: 'scale(1) translateX(0) rotate(0deg)'})),
      state('move-right', style({transform: 'scale(0.7) translateX(300px) rotate(360deg)'})),
      transition('move-left <=> move-right', animate('1s ease-out')), // <=> bidimensional (teria seta signal),  DE => Para ou vise-versa
      transition('* => move-right', animate('1s 2s')), // * => move-right sem valor inicial  no signal
      transition('* => move-left', animate('1s')), //  * => move-left usa sem valor inicial  no signal
    ]) // pai de todos
  ]
})

export class AnimationsComponent {
  public moveIn = signal('move-left')

}
