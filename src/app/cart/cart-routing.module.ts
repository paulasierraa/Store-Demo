import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import { from } from 'rxjs';
import {CartComponent} from './components/cart.component';

const routes:Routes=[
    {
        path:'cart',
        component:CartComponent
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]

})
export class CartRoutingModule{
   
      
}