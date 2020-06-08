import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailviewComponent } from './customerdetailview/customerdetailview.component';
import { CustomerComponent } from './customer.component';
import { CustomerorderComponent } from './customerorder/customerorder.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { CanActivateGuard } from './can-activate.guard';


const routes: Routes = [
  {
  path: '',
  component: CustomerComponent,
  children: [
    { path: 'detail', component: CustomerdetailviewComponent },
    { path: 'order', component: CustomerorderComponent },
    { path: 'edit',
      component: EditcustomerComponent,
      canActivate: [CanActivateGuard]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
