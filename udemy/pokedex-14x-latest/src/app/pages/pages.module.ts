import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// module routas
import {RoutingModule} from "./routing.module";

// pages
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PagesModule {
}
