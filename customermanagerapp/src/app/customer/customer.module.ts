import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

import { CustomerorderComponent } from './customerorder/customerorder.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { CustomerdetailviewComponent } from './customerdetailview/customerdetailview.component';
import { CanActivateGuard } from './can-activate.guard';


@NgModule({
  declarations: [CustomerComponent, CustomerdetailviewComponent, CustomerorderComponent, EditcustomerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule
  ],
  providers: [CanActivateGuard]
})
export class CustomerModule { }
