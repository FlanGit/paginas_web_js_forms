import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { ContactsModule } from './contacts/contacts.module';
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    ContactsModule,
    HomeModule,
    TareasModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
