import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HomeModule } from './home/home.module';
import { TareasComponent } from './tareas/tareas.component';
import { TareasModule } from './tareas/tareas.module';

// the second parameter 'fr' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent
   
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HomeModule,
  /*    ContactsModule,*/

    TareasModule, 
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  exports: [

  ],
  providers: [
/*     UsuariosService, */
    { provide: LOCALE_ID, useValue: 'es' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  