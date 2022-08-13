import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaAnimaisComponent} from './lista-animais/lista-animais.component';
import {DetalhesAnimalComponent} from './detalhes-animal/detalhes-animal.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
  }, {
    path: ':animalId',
    component: DetalhesAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
