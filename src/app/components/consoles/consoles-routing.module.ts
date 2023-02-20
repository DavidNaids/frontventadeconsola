import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolesComponent } from './consoles.component';

const routes: Routes = [{ path: '', component: ConsolesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsolesRoutingModule { }
