import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina2RoutingModule } from './pagina2-routing.module';
import { Pagina2Component } from './pagina2.component';
import { ArribaComponent } from './arriba/arriba.component';
import { LateralComponent } from './lateral/lateral.component';

@NgModule({
  declarations: [Pagina2Component, ArribaComponent, LateralComponent],
  imports: [
    CommonModule,
    Pagina2RoutingModule
  ]
})
export class Pagina2Module { }
