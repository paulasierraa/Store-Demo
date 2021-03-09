import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'; //PRINCIPIOS REACTIVOS
import {Product} from '@models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products:Product[] =[];
  private cart= new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable(); //creamos un observable para ser visto desde cualquier lado
  constructor() { }

  addCart(product:Product)
  {
    this.products = [...this.products,product]; //no tenemos problemas de referencia con el array
    this.cart.next(this.products); //enviamos que se ha enviado un dato
    
  }
}
