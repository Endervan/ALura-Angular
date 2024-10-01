import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {animate, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('move-ball', [
      state('move-left', style({
        transform: 'scale(1) translateX(0) rotate(0deg)'
      })),
      state('move-right', style({
        transform: 'scale(0.7) translateX(300px) rotate(360deg)'
      })),
      transition('move-left <=> move-right', animate('1s ease-out')), // <=> bidimensional (teria seta signal),  DE => Para ou vise-versa
      transition(':enter', [animate('2s', keyframes([ // usa css dentro transition
        style({
          opacity: 0,
          transform: 'scale(1) translateX(0) rotate(0deg)'
        }),
        style({
          opacity: 0.5,
          transform: 'scale(0.9) translateX(150px) rotate(180deg)'
        }),
        style({
          opacity: 1,
          transform: 'scale(0.7) translateX(300px) rotate(360deg)'
        }),
      ]))]), // :enter entrada inicialização
      transition(':leave', [animate('2s', keyframes([ // usa css dentro transition
        style({
          opacity: 1,
          transform: 'scale(0.7) translateX(300px) rotate(360deg)'
        }),
        style({
          opacity: 0.5,
          transform: 'scale(0.9) translateX(150px) rotate(180deg)'
        }),
        style({
          opacity: 0,
          transform: 'scale(1) translateX(0) rotate(0deg)'
        }),
      ]))]), // * => void ou :leave saida destruição
      transition('* => move-right', animate('5s 1s ease-in-out')), // * => move-right sem valor inicial  no signal
      transition('* => move-left', animate('1s')), //  * => move-left usa sem valor inicial  no signal
    ]), // pai de todos
    trigger('list-itens', [
      transition(':enter', [
        query('li', [
          style({
            background: 'yellow',
            transform: 'translateY(100px)'
          }),
          stagger('1s', [ // stagger => animation individual por estagio
            animate('1s')
          ])
        ])
      ])
    ])
  ]
})

export class AnimationsComponent {
  public moveIn = signal('')

}
