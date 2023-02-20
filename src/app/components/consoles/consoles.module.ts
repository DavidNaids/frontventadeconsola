import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsolesRoutingModule } from './consoles-routing.module';
import { ConsolesComponent } from './consoles.component';
import { CarritoModule } from '../carrito/carrito.module';
import { CardModule } from '../card/card.module';


@NgModule({
  declarations: [
    ConsolesComponent
  ],
  imports: [
    CommonModule,
    ConsolesRoutingModule,
    CarritoModule,
    CardModule
  ],
  exports: [
    ConsolesComponent
  ]
})
export class ConsolesModule { }
