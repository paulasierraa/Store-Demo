import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';  // Importamos los interceptors

import { LayoutComponent } from './components/layout/layout.component';
import {SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// importamos firebase para autenticaci´n
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';


import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { AuthInterceptor } from './interceptors/auth.interceptor';



Sentry.init({
  dsn: "https://1836dfcdca484b9483d57395b44a9b3b@o542482.ingest.sentry.io/5662401",
});

@NgModule({
  declarations: [
    AppComponent,
     LayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,   // implementamos nuestro interceptor
    useClass:AuthInterceptor,
    multi: true           //a cualquier petición que llega le aplica ese interceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
