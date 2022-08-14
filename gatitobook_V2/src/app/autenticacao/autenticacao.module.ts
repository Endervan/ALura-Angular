import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AutenticacaoInterceptor} from './autenticacao.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // avisando angular que vai usa nosso intercepor
      useClass: AutenticacaoInterceptor,
      multi: true, // quiser ter cadeia de interceptor
    }
  ]
})
export class AutenticacaoModule {
}
