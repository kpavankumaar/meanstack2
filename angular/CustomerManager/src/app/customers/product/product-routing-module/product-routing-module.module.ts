import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {path: '', component: ProductComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class ProductRoutingModuleModule { }
