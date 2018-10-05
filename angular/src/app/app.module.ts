import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { ContactsModule } from './contacts/contacts.module';
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { UsuariosService } from './services/usuarios.service';
import { ArticuloComponent } from './articulo/articulo.component';

// the second parameter 'fr' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArticuloComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    ContactsModule,
    HomeModule,
    TareasModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [ 
    UsuariosService,
    { provide: LOCALE_ID, useValue: 'es' }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
