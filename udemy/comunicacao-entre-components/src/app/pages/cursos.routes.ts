import {Routes} from '@angular/router';
import {canActivateGuard} from "../guard/can-activate.guard";
import {canMatchGuard} from "../guard/can-match.guard";
import {canDeactivateGuard} from "../guard/can-deactivate.guard";

export const cursosRoutes: Routes = [

  {
    path: '',
    title: 'home da pagina',
    loadComponent: () => import("./home/home.component"), // carregar pagina sobre demanda(lazy load)
    canMatch: [canMatchGuard]
  }, {
    path: 'sobre',
    title: 'Sobre da pagina',
    loadComponent: () => import("./sobre/sobre.component"), // carregar pagina sobre demanda(lazy load)
    canActivate: [canActivateGuard]
  }, {
    path: 'servicos/:id',
    title: 'Serviços Prestados',
    loadComponent: () => import("./servicos-prestados/servicos-prestados.component"), // carregar pagina sobre demanda(lazy load)
    canDeactivate: [canDeactivateGuard]
  }

];
