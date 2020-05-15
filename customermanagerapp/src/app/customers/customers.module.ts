import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerscardviewComponent } from './customerscardview/customerscardview.component';
import { CustomerslistviewComponent } from './customerslistview/customerslistview.component';


@NgModule({
  declarations: [CustomersComponent, CustomerscardviewComponent, CustomerslistviewComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
