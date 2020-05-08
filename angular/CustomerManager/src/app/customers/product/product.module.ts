import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModuleModule } from './product-routing-module/product-routing-module.module';




@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModuleModule
  ]
})
export class ProductModule { }
