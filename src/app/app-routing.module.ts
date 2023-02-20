import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { NewconsoleComponent } from './components/newconsole/newconsole.component';
import { Auth0Guard } from './guards/auth0.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'consoles', loadChildren: () => import('./components/consoles/consoles.module').then(m => m.ConsolesModule), canActivate:[Auth0Guard] },
  { path: 'game/:id', loadChildren: () => import('./components/detailconsole/detailconsole.module').then(m => m.DetailconsoleModule) },
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'newconsole', component: NewconsoleComponent, canActivate:[Auth0Guard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
