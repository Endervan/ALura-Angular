import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  // canActivateGuard ≥ usado proteger somente rotas nao consegui guarda os seus filhos
  console.log(route,state)
  return true;
};
