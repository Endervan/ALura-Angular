import {Routes} from '@angular/router';

export const cursosRoutes: Routes = [

      {
        path: '',
        title: 'home da pagina',
        loadComponent: () => import("./home/home.component"), // carregar pagina sobre demanda(lazy load)
      }, {
        path: 'sobre',
        title: 'Sobre da pagina',
        loadComponent: () => import("./sobre/sobre.component"), // carregar pagina sobre demanda(lazy load)
      }, {
        path: 'servicos/:id',
        title: 'Serviços Prestados',
        loadComponent: () => import("./servicos-prestados/servicos-prestados.component"), // carregar pagina sobre demanda(lazy load)
      }

];
