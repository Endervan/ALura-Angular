import {Routes} from '@angular/router';
import HomeComponent from "./pages/home/home.component";
import SobreComponent from "./pages/sobre/sobre.component";
import ServicosPrestadosComponent from "./pages/servicos-prestados/servicos-prestados.component";


export const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        title: 'home da pagina',
        loadComponent: () => import("./pages/home/home.component"),
      }, {
        path: 'sobre',
        title: 'Sobre da pagina', // carregar pagina sobre demanda(lazy load)
        loadComponent: () => import("./pages/sobre/sobre.component"),
      }, {
        path: 'servicos/:id',
        title: 'Serviços Prestados',
        loadComponent: () => import("./pages/servicos-prestados/servicos-prestados.component"),
      }
    ]
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        title: 'home da pagina',
        component: HomeComponent
      }, {
        path: 'sobre',
        title: 'Sobre da pagina',
        component: SobreComponent
      }, {
        path: 'servicos/:id',
        title: 'Serviços Prestados',
        component: ServicosPrestadosComponent
      }
    ]
  },
  {
    path: '**',
    title: 'Pagina Não encontrada',
    loadComponent: () => import("./pages/not-found/not-found.component"),
  }

];
