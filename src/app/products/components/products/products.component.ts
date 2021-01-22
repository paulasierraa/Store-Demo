import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Product} from 'src/app/models/product.model';
import {ProductsService} from 'src/app/core/service/products/products.service';
import { Thumbs } from 'swiper';
//inyección de dependencias para conectar servicio


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos:Product[]=[];
  constructor(private route:ActivatedRoute, private productService:ProductsService) { }
  
  ngOnInit(): void {
    //manejo de peticiones a datos
    this.fetchProducts();
  }
  
  clickProduct(id:string){
    console.log(id);
  }
  fetchProducts(){
    this.productService.getAllProducts().subscribe(products=>{
      this.productos= products;
    })
  }
}
