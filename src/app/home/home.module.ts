import {NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';//para que funcione ngfor, ngIf y ngSwitch

import {HomeRoutingModule} from './home-routing.module';


import { BannerComponent } from './components/banner/banner.component';
import {HomeComponent} from './components/home/home.component';


@NgModule(
    {
        declarations:[
            BannerComponent,
            HomeComponent
        ],
        imports:[
            CommonModule,
            HomeRoutingModule
        ],
        exports:[
            // HomeComponent
          ]
    }
)
export class HomeModule{
   
}