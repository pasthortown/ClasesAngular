import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina4RoutingModule } from './pagina4-routing.module';
import { Pagina4Component } from './pagina4.component';

@NgModule({
  declarations: [Pagina4Component],
  imports: [
    CommonModule,
    Pagina4RoutingModule
  ]
})
export class Pagina4Module { }
