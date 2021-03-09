import { Component, OnInit } from '@angular/core';
import {ProductsService} from '@core/service/products/products.service';
import {Product} from '@models/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
 
  products:Product[]=[];
  constructor(private productService:ProductsService) { }

  displayedColumns: string[] = ['id','title','price','actions']; //columnas de la tabla


  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts()
  {
    this.productService.getAllProducts().subscribe(productos=>{
      this.products=productos;
    });
  }
  deleteProduct(id:string)
  {
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.fetchProducts();
    })
  }

}
