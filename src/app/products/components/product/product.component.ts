import { Component, OnInit, Input , Output, EventEmitter, SimpleChange, DoCheck, OnDestroy} from '@angular/core';
import { Product } from '@models/product.model';
import {Router, RouterModule} from '@angular/router';
// importamos servicio de carrito
import {CartService} from '@core/service/cart/cart.service';
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponentComponent implements OnInit,DoCheck,OnDestroy {
  // comunicar de componente padre a hijo
  @Input() product!:Product; // enviamos la data del componente
  // comunicar componente de hijo a padre
  @Output() productClicked:EventEmitter<any>= new EventEmitter();
  constructor(private cartService:CartService) {

    console.log('soy constructor');
  }
  ngOnChanges(changes: SimpleChange)
  {
    console.log('soy ngOnChanges');
    console.log(changes);
  }
  ngOnInit(): void {
    // llamada a serviciosa de datos
    console.log('soy ngOnInit');
  }
  ngDoCheck()
  {
    console.log('soy ngDoCheck');
  }
  ngOnDestroy()
  {
    console.log('soy ngOnDestroy');
  }
  addCar()
  {
    console.log('añadir al carrito');
    // this.productClicked.emit(this.product.id); //enviamos la información al padre
      this.cartService.addCart(this.product);
  }

}
