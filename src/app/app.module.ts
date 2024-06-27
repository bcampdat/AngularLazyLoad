import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { InicioModule } from './inicio/inicio.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // InicioModule, no es necesario porque se carga con las routes
    HttpClientModule,
    SharedModule
    // PaisesModule  no se pone porque estamos usando lazyload
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
