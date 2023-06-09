import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CabecalhoComponent} from './componentes/cabecalho/cabecalho.component';
import {RodapeComponent} from './componentes/rodape/rodape.component';
import {CriarPensamentoComponent} from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import {FormsModule} from "@angular/forms";
import {ListarPensamentoComponent} from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {PensamentosComponent} from './componentes/pensamentos/pensamentos/pensamentos.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
