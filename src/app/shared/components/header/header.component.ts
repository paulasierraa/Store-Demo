import { Component, OnInit } from '@angular/core';
import {map}from 'rxjs/operators'; //map nos ayudará a transformar el valor que nos llega por uno nuevo
//importamos servicio de carrito
import {CartService} from 'src/app/core/service/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total =0; //para saber cuantos productos hay
  constructor(private cartService:CartService) { 
    //Nos suscribimos al cart para saber cuantos productos tiene
    this.cartService.cart$.subscribe(products=>{
      this.total=products.length;
    });
   }

  ngOnInit(): void {
  }

}
