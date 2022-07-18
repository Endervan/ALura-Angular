import {BrowserModule} from '@angular/platform-browser';
import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NovaTransferenciaComponent} from './nova-transferencia/nova-transferencia';
import {FormsModule} from '@angular/forms';
import {ExtratoComponent} from './extrato/extrato.component';


// ********* add formato br no projeto provide: LOCALE_ID, useValue: 'pt' e
// DEFAULT_CURRENCY_CODE,useValue: 'BRL'
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {BadgeComponent} from './badge/badge.component';
import {HttpClientModule} from '@angular/common/http';

registerLocaleData(localePt, 'pt');

// *********** add formato br no projeto provide: LOCALE_ID, useValue: 'pt'


@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
