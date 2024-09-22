import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';

//corrigindo numbes, percent e moeda para formato BR global
import localePt from '@angular/common/locales/pt';
import {IMAGE_LOADER, ImageLoaderConfig, registerLocaleData} from "@angular/common";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpInterceptor} from "./interceptor/http.interceptor";
import {provideTranslate} from "./app.translate";
import {environment} from "@environments/environment";

registerLocaleData(localePt);
//corrigindo numbes, percent e moeda para formato BR global


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({
        paramsInheritanceStrategy: 'always', // configuracao permite que @Input servi tando para pega params com rota com uso normal
      }
    )),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideTranslate(),
    // provideImgixLoader(environment.img), // melhorando caminho relativo das images
    {
      provide: IMAGE_LOADER, useValue: (config: ImageLoaderConfig) => {
        const img = config.src.split('.');
        const name = img.shift(); // pega inicio do nosso array
        const type = img.pop();
        const width = config.width;
        return `${environment.img}${name}-${width}w.${type}`
      }
    },
    {provide: LOCALE_ID, useValue: 'pt-BR'} //corrigindo numbes, percent e moeda para formato BR Global
  ]
};
