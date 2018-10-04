import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { cabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    cabeceraComponent,
    LogoComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
