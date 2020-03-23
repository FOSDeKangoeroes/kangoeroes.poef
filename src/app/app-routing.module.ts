import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './core/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'drinks',
    loadChildren: () => import('./features/drinks/drinks.module').then(mod => mod.DrinksModule),
    canActivate: [AuthGuard]
  }
  ,
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
