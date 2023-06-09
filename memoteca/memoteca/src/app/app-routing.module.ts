import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CriarPensamentoComponent} from "./componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import {ListarPensamentoComponent} from "./componentes/pensamentos/listar-pensamento/listar-pensamento.component";

const routes: Routes = [
  {
    path: '',
    redirectTo:'listarPensamentos',
    pathMatch:'full'

  },{
    path: 'criarPensamentos',
    component: CriarPensamentoComponent
  }, {
    path: 'listarPensamentos',
    component: ListarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
