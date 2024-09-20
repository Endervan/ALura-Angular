import {Routes} from '@angular/router';


export const routes: Routes = [

  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos.routes').then((r) => r.cursosRoutes)
  },
  {
    path: '**',
    title: 'Pagina Não encontrada', // carregar pagina sobre demanda(lazy load)
    loadComponent: () => import("./pages/not-found/not-found.component"),
  }

];
