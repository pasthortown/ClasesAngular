import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'p1', pathMatch: 'full' },
  { path: 'p1', loadChildren: './pagina1/pagina1.module#Pagina1Module' },
  { path: 'p2', loadChildren: './pagina2/pagina2.module#Pagina2Module' },
  { path: 'p3', loadChildren: './pagina3/pagina3.module#Pagina3Module' },
  { path: 'p4', loadChildren: './pagina4/pagina4.module#Pagina4Module' },
  { path: 'p5', loadChildren: './pagina5/pagina5.module#Pagina5Module' },
  { path: 'p6', loadChildren: './pagina6/pagina6.module#Pagina6Module' },
  { path: 'page-not-found', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule' },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
