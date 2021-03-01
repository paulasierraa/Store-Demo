import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map}from 'rxjs/operators'; //map nos ayudará a transformar el valor que nos llega por uno nuevo
//importamos servicio de carrito
import {CartService} from 'src/app/core/service/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$!:Observable<number>; //para saber cuantos productos hay
  constructor(private cartService:CartService) { 
    //Nos suscribimos al cart para saber cuantos productos tiene
    this.total$= this.cartService.cart$ //NO NOS SUSCRIBIMOS Y GUARDAMOS EL VALOR
    .pipe(
      map(product=> product.length) //obtengo la lista y la transformo a 1 valor
    );

    // .subscribe(total=>{ //al total me llega el valor total
    //   this.total=total;
    // });
   }

  ngOnInit(): void {
  }

}
