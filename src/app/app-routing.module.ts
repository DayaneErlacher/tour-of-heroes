import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  //path: uma string que corresponde ao URL na barra de endereços do navegador.
  //o componente que o roteador deve criar ao navegar para esta rota.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  //forRoot???
  imports: [RouterModule.forRoot(routes)],
  //Export para todo app
  exports: [RouterModule]
})
export class AppRoutingModule { }