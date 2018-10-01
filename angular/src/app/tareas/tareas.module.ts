import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasPlusComponent } from './tareas-plus/tareas-plus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ],
  declarations: [
    TareasComponent,
    TareasSimpleComponent,
    TareasPlusComponent
  ],
  entryComponents: [TareasComponent]
})
export class TareasModule { }
