import {NgModule} from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import { from } from 'rxjs';
import { ProductsComponent } from './components/products/products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
const routes:Routes=[
    {
        path:'',
        component:ProductsComponent
    },{
        path:':id',
        component:ProductDetailComponent
    }
];
@NgModule({
    imports:
    [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class ProductsRoutingModule{

}