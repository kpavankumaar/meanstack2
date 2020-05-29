import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailviewComponent } from './customerdetailview/customerdetailview.component';
import { CustomerComponent } from './customer.component';
import { CustomerorderComponent } from './customerorder/customerorder.component';


const routes: Routes = [
  {
  path: '',
  component: CustomerComponent,
  children: [
    {path: 'detail', component: CustomerdetailviewComponent},
    {path: 'order', component: CustomerorderComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
