import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AutenticacaoGuard} from './autenticacao/autenticacao.guard';
import {LoginGuard} from './autenticacao/login.guard';
import {AnimaisRoutingModule} from "./animais/animais-routing.module";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'animais',
    loadChildren: () =>
      import('./animais/animais.module').then((m) => m.AnimaisModule),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
