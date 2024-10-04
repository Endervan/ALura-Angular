import {CanActivateChildFn} from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  // canActivateChildGuard -> serve proteger as rotas filhas somente
  console.log("canActivateChildGuard", childRoute,state);
  return false;
};
