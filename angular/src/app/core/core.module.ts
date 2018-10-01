import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    CabeceraComponent,
    MenuComponent,
    MainComponent,
    PieComponent,
    LogoComponent],
  providers: [],
  exports :[
    CabeceraComponent,
    MenuComponent,
    MainComponent,
    PieComponent
  ],
  bootstrap : []
})
export class CoreModule { }
