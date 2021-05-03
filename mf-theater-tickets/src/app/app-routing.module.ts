import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  {
    path: 'theater-tickets/list',
    loadChildren: () => import('./tickets-list/tickets-list.module').then(m => m.TicketsListModule)
  },
  {
    path: '**',
    component: EmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
