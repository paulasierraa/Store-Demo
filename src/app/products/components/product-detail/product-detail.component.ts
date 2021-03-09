import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Routes, RouterModule} from '@angular/router';
import { switchMap } from 'rxjs/operators'; // datos de forma lineal
// activeROUTE INYECCIÓN DE DEPENDENCIA Y PARAMS DE TIPADO
// para consultar con id

// importar servicio

import {ProductsService} from '@core/service/products/products.service';
import {Product} from '@models/product.model';
import { Observable } from 'rxjs';

// importamos librería file saver

import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$!: Observable<Product>;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
   }

  ngOnInit(): void {
  // trae los paramétros de la ruta y luego se suscribe a ese cambio

  this.product$ = this.route.params.pipe(
    switchMap((params: Params) => { // una vez envíe los parametros el observable
      return this.productsService.getProduct(params.id);
    })
  );
  this.getRandomUsers();
    // this.route.params.pipe(
    //   switchMap((params: Params) => { // una vez envíe los parametros el observable
    //     return this.productsService.getProduct(params.id);
    //   })
    // ).subscribe((product) => {
    //     // al llegar al subscribe , ya trae el producto
    //     this.product = product;
    // //    this.product =this.productsService.getProduct(params.id)!;//agrega ! para que mn
    // });
  }
  getRandomUsers()
  {
    this.productsService.getRandomUsers()
    .subscribe(
      users => {
      console.log(users);
    },
    error=>{
      console.log(error);
    }
    )
  }
    crear(product: Product):void
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
    getFile()
    {
      this.productsService.getFile().subscribe(content=>
       {
        console.log(content);
        var file = new File([content],"infor.txt",{type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
       }
      );
    }
}
