import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Product} from '@models/product.model';
import {ProductsService} from '@core/service/products/products.service';
import { Thumbs } from 'swiper';
// inyección de dependencias para conectar servicio


@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ProductsContainer implements OnInit {

  productos: Product[] = [];
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }
  ngOnInit(): void {
    // manejo de peticiones a datos
    this.fetchProducts();
  }
  // tslint:disable-next-line:typedef
  clickProduct(id: string){
    console.log(id);
  }
  // tslint:disable-next-line:typedef
  fetchProducts(){
    this.productService.getAllProducts().subscribe(products=>{
      this.productos = products;
    });
  }
}
