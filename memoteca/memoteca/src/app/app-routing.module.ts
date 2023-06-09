import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CriarPensamentoComponent} from "./componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import {ListarPensamentoComponent} from "./componentes/pensamentos/listar-pensamento/listar-pensamento.component";
import {ExcluiPensamentoComponent} from "./componentes/pensamentos/exclui-pensamento/exclui-pensamento.component";
import {EditarPensamentoComponent} from "./componentes/pensamentos/editar-pensamento/editar-pensamento.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamentos',
    pathMatch: 'full'

  }, {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  }, {
    path: 'listarPensamentos',
    component: ListarPensamentoComponent
  }, {
    path: 'pensamento/excluir/:id',
    component: ExcluiPensamentoComponent
  }, {
    path: 'pensamento/editar/:id',
    component: EditarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
