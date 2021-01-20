import {NgModule} from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(routes), //utiliza unas rutas en especifico
    ],
    exports:[
        RouterModule //se exporta el módulo de las rutas para que otros modulos lo utilicen
    ]
})
export class HomeRoutingModule{}
