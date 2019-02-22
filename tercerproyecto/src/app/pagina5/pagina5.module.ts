import { Pagina5Component } from './pagina5.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina5RoutingModule } from './pagina5-routing.module';

@NgModule({
  declarations: [Pagina5Component],
  imports: [
    CommonModule,
    Pagina5RoutingModule
  ]
})
export class Pagina5Module { }
