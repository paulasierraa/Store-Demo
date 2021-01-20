import {NgModule} from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import { from } from 'rxjs';
import { ContactComponent } from './components/contact.component';

const routes:Routes=[
    {
        path:'',
        component:ContactComponent
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
export class ContactRoutingModule{

}