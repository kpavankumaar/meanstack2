import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomersCardViewComponent } from '../customers-card-view/customers-card-view.component';
import { CustomersListViewComponent } from '../customers-list-view/customers-list-view.component';

const routes: Routes = [
  {
  path: '',
  component: CustomersCardViewComponent,
  children: [
    {path: 'details', component: CustomersListViewComponent}
  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
