import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersCardViewComponent } from './customers-card-view/customers-card-view.component';
import { CustomersListViewComponent } from './customers-list-view/customers-list-view.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CustomersCardViewComponent, CustomersListViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule
  ],
  //exports: [CustomersCardViewComponent]
})
export class CustomersModule { }
