import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Product} from 'src/app/models/product.model';
import {ProductsService} from 'src/app/core/service/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos!:Product[];
  constructor(private route:ActivatedRoute, private productService:ProductsService) { }
  
  ngOnInit(): void {
    this.productos=this.productService.getAllProducts();
  }
  
  clickProduct(id:string){
    console.log(id);
  }
}
