import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsContainer } from './containers/products/products.container';
import {ProductComponentComponent} from './components/product/product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

import {ProductsRoutingModule} from './products-routing.module';
import {SharedModule} from './../shared/shared.module';
import {MaterialModule} from './../material/material.module';

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductsContainer,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ] 
})
export class ProductsModule { }
