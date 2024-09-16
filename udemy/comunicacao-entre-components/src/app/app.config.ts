import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//corrigindo numbes, percent e moeda para formato BR global
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpInterceptor} from "./interceptor/http.interceptor";
registerLocaleData(localePt);
//corrigindo numbes, percent e moeda para formato BR global


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([httpInterceptor])
    ),
    {provide: LOCALE_ID, useValue: 'pt-BR'} //corrigindo numbes, percent e moeda para formato BR Global
  ]
};
