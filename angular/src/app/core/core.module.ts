import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';
import { PieComponent } from './pie/pie.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    CabeceraComponent,
    MainComponent,
    LogoComponent,
    PieComponent,
    MenuComponent,
    ],
    
  exports:[
    CabeceraComponent,
    MainComponent,
    MenuComponent,
    PieComponent,
  ],
  bootstrap:[]
})
export class CoreModule { }
