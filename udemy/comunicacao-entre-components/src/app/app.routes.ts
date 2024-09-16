import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SobreComponent} from "./pages/sobre/sobre.component";
import {ServicosPrestadosComponent} from "./pages/servicos-prestados/servicos-prestados.component";

export const routes: Routes = [
  {
    path:'',
    title:'home da pagina',
    component:HomeComponent
  },{
    path:'sobre',
    title:'Sobre da pagina',
    component:SobreComponent
  },{
    path:'servicos11',
    title:'Serviços Prestados',
    component:ServicosPrestadosComponent
  },

];
