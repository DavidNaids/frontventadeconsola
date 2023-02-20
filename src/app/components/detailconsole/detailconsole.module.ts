import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailconsoleRoutingModule } from './detailconsole-routing.module';
import { DetailconsoleComponent } from './detailconsole.component';


@NgModule({
  declarations: [
    DetailconsoleComponent
  ],
  imports: [
    CommonModule,
    DetailconsoleRoutingModule,
  ],
})
export class DetailconsoleModule { }
