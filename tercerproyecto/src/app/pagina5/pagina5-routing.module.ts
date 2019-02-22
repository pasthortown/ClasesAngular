import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina5Component } from './pagina5.component';

const routes: Routes = [{
  path: '',
  component: Pagina5Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pagina5RoutingModule { }
