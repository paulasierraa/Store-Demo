import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductComponentComponent} from '../product/components/product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductsComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  
  ],
  exports:[
    // ProductsComponent
  ]
})
export class ProductsModule { }
