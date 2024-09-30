import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {state, style, trigger} from "@angular/animations";

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
    ]) // pai de todos
  ]
})
export class AnimationsComponent {

  public moveIn = signal('')

}
