import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnimaisRoutingModule} from './animais-routing.module';
import {ListaAnimaisComponent} from './lista-animais/lista-animais.component';
import {AnimalComponent} from './animal/animal.component';
import {CartaoModule} from '../componentes/cartao/cartao.module';
import {GradeFotosAnimaisComponent} from './grade-fotos-animais/grade-fotos-animais.component';
import {DetalhesAnimalComponent} from './detalhes-animal/detalhes-animal.component';
import {ComentariosComponent} from './detalhes-animal/comentarios/comentarios.component';
import {SharedModule} from '../shared/shared.module';
import {NovoAnimalComponent} from './novo-animal/novo-animal.component';

@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent, DetalhesAnimalComponent, ComentariosComponent, NovoAnimalComponent],
  imports: [CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    SharedModule
  ],
})
export class AnimaisModule {
}
