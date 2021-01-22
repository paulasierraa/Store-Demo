import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Routes,RouterModule} from '@angular/router';

//activeROUTE INYECCIÓN DE DEPENDENCIA Y PARAMS DE TIPADO
//para consultar con id

//importar servicio

import {ProductsService} from 'src/app/core/service/products/products.service';
import {Product} from 'src/app/models/product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product ={} as Product;
  constructor(private route:ActivatedRoute,private productsService:ProductsService) {
   }

  ngOnInit(): void {
  //trae los paramétros de la ruta y luego se suscribe a ese cambio
    this.route.params.subscribe((params:Params)=>{
        this.fetchProduct(params.id);
    //    this.product =this.productsService.getProduct(params.id)!;//agrega ! para que mn
    });
  }

    fetchProduct(id:string){
      this.productsService.getProduct(id).subscribe(product=>{
          this.product=product;
      });
    }

    crear(product:Product)
    {
      this.productsService.createProduct(product).subscribe(data=>{
        console.log(data);
      })
    }
    update(id:string)
    {
      // this.productsService.updateProduct(id).subscribe(data=>{
      //   console.log(data)
      // });
    }
}
