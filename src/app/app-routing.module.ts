import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//importando componentes
import {DemoComponent} from './components/demo/demo.component';
import {LayoutComponent} from './components/layout/layout.component';

//importamos guardian
import {AdminGuard} from './admin.guard';
const routes: Routes = [
  { //redireción al home si pone la ruta en seco
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path:'home',
        loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'products',
        loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
      },
      {
        path:'products/:id',
        loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
      },
     
      {
        path:'contact',
        canActivate:[AdminGuard],
        loadChildren:()=> import('./contact/contact.module').then(m=>m.ContactModule)
      },
    ]
  },

  {
    path:'demo',
    component: DemoComponent

  },
  {
    path:'**',
    loadChildren:()=>import('./page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules //renderiza la red lenta pregarga algunos modulos
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
