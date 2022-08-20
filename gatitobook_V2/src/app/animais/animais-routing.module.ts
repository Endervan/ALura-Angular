import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaAnimaisComponent} from './lista-animais/lista-animais.component';
import {DetalhesAnimalComponent} from './detalhes-animal/detalhes-animal.component';
import {ListaAnimaisResolver} from './lista-animais/lista-animais.resolver';
import {NovoAnimalComponent} from './novo-animal/novo-animal.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver
    }
  }, {
    path: ':animalId',
    component: DetalhesAnimalComponent,
  }, {
    path: 'novo',
    component: NovoAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {
}
