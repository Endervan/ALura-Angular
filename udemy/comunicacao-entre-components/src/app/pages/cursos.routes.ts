import {Routes} from '@angular/router';
import {canActivateGuard} from "../guard/can-activate.guard";

export const cursosRoutes: Routes = [

  {
    path: '',
    title: 'home da pagina',
    loadComponent: () => import("./home/home.component"), // carregar pagina sobre demanda(lazy load)
  }, {
    path: 'sobre',
    title: 'Sobre da pagina',
    loadComponent: () => import("./sobre/sobre.component"), // carregar pagina sobre demanda(lazy load)
    canActivate: [canActivateGuard]
  }, {
    path: 'servicos/:id',
    title: 'Serviços Prestados',
    loadComponent: () => import("./servicos-prestados/servicos-prestados.component"), // carregar pagina sobre demanda(lazy load)
  }

];
