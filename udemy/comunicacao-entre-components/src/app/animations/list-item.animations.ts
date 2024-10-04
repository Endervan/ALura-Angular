import {animate, query, sequence, stagger, style, transition, trigger} from "@angular/animations";

export const mediaMax600 = trigger('list-itens', [
  transition(':enter', [
    query('li', [
      style({
        background: 'yellow',
        transform: 'translateY(100px)'
      }),
      //stagger('1s', [animate('1s')]), // stagger => animation individual por estagio
      // group([ // chegar a atropelar de acordo com a logica
      //   animate('1s', style({
      //     background: 'red',
      //   })),
      //   animate('2s', style({
      //     background: 'blue',
      //   })),
      //   animate('7s', style({
      //     background: 'brown',
      //     transform: 'translateY(0)'
      //   })),
      // ]),
      sequence([ // segue rigoroso em cascata de cima para baixo
        animate('1s', style({
          background: 'red',
        })),
        animate('2s', style({
          background: 'blue',
        })),
        animate('7s', style({
          background: 'brown',
          transform: 'translateY(0)'
        })),
      ]),
    ])
  ]),
  transition(':decrement', [ // increment ou decrement ajusta (listas da animacoes no caso de rotas )
    query('li:leave', [
      style({
        background: 'blue',
      }),
      animate('1s', style({
        opacity: 0,
      }))
    ], {optional: true})
  ]),
  transition(':increment', [ // increment ou decrement ajusta (listas da animacoes no caso de rotas )
    query('li:enter', [
      style({
        background: 'yellow',
        transform: 'translateY(100px)'
      }),
      stagger('700ms', [animate('1s')])
    ], {optional: true})
  ]),

]);
export const mediaMax700 = trigger('list-itens', [
  transition(':enter', [
    query('li', [
      style({
        background: 'red',
        transform: 'translateY(100px)'
      }),
      //stagger('1s', [animate('1s')]), // stagger => animation individual por estagio
      // group([ // chegar a atropelar de acordo com a logica
      //   animate('1s', style({
      //     background: 'red',
      //   })),
      //   animate('2s', style({
      //     background: 'blue',
      //   })),
      //   animate('7s', style({
      //     background: 'brown',
      //     transform: 'translateY(0)'
      //   })),
      // ]),
      sequence([ // segue rigoroso em cascata de cima para baixo
        animate('1s', style({
          background: 'red',
        })),
        animate('2s', style({
          background: 'blue',
        })),
        animate('7s', style({
          background: 'brown',
          transform: 'translateY(0)'
        })),
      ]),
    ])
  ]),
  transition(':decrement', [ // increment ou decrement ajusta (listas da animacoes no caso de rotas )
    query('li:leave', [
      style({
        background: 'blue',
      }),
      animate('1s', style({
        opacity: 0,
      }))
    ], {optional: true})
  ]),
  transition(':increment', [ // increment ou decrement ajusta (listas da animacoes no caso de rotas )
    query('li:enter', [
      style({
        background: 'yellow',
        transform: 'translateY(100px)'
      }),
      stagger('700ms', [animate('1s')])
    ], {optional: true})
  ]),

]);

export const listItensAnimation = () => {
  if (isMatchMedia(600)) {
    return mediaMax600;
  }

  if (isMatchMedia(700)) {
    return mediaMax700;
  }
  return;
}

const isMatchMedia = (value: number) => {
  return matchMedia(`(max-width:${value}px)`).matches;
}
