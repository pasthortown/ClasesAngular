import { Pagina1Component } from './pagina1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina1RoutingModule } from './pagina1-routing.module';
import { RojaComponent } from './roja/roja.component';
import { VerdeComponent } from './verde/verde.component';

@NgModule({
  declarations: [Pagina1Component, RojaComponent, VerdeComponent],
  imports: [
    CommonModule,
    Pagina1RoutingModule
  ]
})
export class Pagina1Module { }
