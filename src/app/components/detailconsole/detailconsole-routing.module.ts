import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailconsoleComponent } from './detailconsole.component';

const routes: Routes = [{ path: '', component: DetailconsoleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailconsoleRoutingModule { }
