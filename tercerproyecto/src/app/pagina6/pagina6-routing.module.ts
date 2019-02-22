import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina6Component } from './pagina6.component';

const routes: Routes = [{
  path: '',
  component: Pagina6Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pagina6RoutingModule { }
