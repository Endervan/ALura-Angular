import {animate, query, style, transition} from "@angular/animations";

export const listItensAnimations = transition('* => *', [
  query(':leave', [
    style({
      background: 'red',
      opacity: 1,
    }), animate('1s', style({
      opacity: 0,
    }))
  ])
])
