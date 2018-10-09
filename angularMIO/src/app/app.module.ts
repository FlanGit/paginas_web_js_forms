import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    CoreModule,

  ],
  exports: [

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 