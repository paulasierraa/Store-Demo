import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';
import {ProductComponentComponent} from './components/product/product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

import {ProductsRoutingModule} from './products-routing.module';
import {SharedModule} from './../shared/shared.module';
import {MaterialModule} from './../material/material.module';

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductsComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ],
  
})
export class ProductsModule { }
