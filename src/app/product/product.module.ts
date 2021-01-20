import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from './product-routing.module';
import {ProductComponentComponent} from './components/product.component';
import {ProductDetailRoutingModule} from '../product-detail/product-detail-routing.module';
@NgModule({
  declarations: [
      ProductComponentComponent
  ],
  imports: [
    CommonModule,
    // ProductRoutingModule,
    ProductDetailRoutingModule
  ],
  exports:[
     ProductComponentComponent
  ]
})
export class ProductModule { }
