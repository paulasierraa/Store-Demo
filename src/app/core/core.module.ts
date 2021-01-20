import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//para decir que tiene un servicio

import { ProductsService } from './service/products/products.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ProductsService
  ]
})
export class CoreModule { }
