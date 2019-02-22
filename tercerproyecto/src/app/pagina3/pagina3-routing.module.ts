import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina3Component } from './pagina3.component';

const routes: Routes = [{
  path: '',
  component: Pagina3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pagina3RoutingModule { }
