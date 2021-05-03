import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsListRoutingModule } from './tickets-list-routing.module';



@NgModule({
  declarations: [TicketsListComponent],
  imports: [
    CommonModule,
    TicketsListRoutingModule
  ]
})
export class TicketsListModule { }
