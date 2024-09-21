import { CanMatchFn } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  // canMatchGuard => serve rotas e seus filhos e melhor estruturado

  return true;
};
