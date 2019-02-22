import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'p1', loadChildren: './pagina1/pagina1.module#Pagina1Module' },
  { path: 'p2', loadChildren: './pagina2/pagina2.module#Pagina2Module' },
  { path: 'p3', loadChildren: './pagina3/pagina3.module#Pagina3Module' },
  { path: 'p4', loadChildren: './pagina4/pagina4.module#Pagina4Module' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
