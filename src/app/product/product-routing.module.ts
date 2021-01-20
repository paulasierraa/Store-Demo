import{NgModule} from '@angular/core';
import{Router,RouterModule,Routes} from '@angular/router';

// import{ProductComponent} from './components/product.component';

const routes:Routes = [];
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
            RouterModule
            
    ]
})
export  class ProductRoutingModule{

}