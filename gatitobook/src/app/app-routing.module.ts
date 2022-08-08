import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimaisRoutingModule} from "./animais/animais-routing.module";
import {AutenticacaoGuard} from "./autenticacao/autenticacao.guard";
import {LoginGuard} from "./autenticacao/login.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', // retira espaços em branco na url
    redirectTo: 'home'
  }, {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),// construindo pagina lazy loading
    canLoad: [LoginGuard]
  }, {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then((m) => m.AnimaisModule),// construindo pagina lazy loading
    canLoad: [AutenticacaoGuard]
  },


  { // obs:sempre passe rota coringa por ultimo *****************************************
    path: '*', redirectTo: 'home' // digitar rota erra sempre vai pra home
  },
];

@NgModule({
  imports: [AnimaisRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
