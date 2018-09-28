import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasComponent } from './lista-tareas.component';
import { TareasSimpleComponent } from '../tareas-simple/tareas-simple.component';
import { FormsModule } from '@angular/forms';


describe('ListaTareasComponent', () => {
  let component: ListaTareasComponent;
  let fixture: ComponentFixture<ListaTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListaTareasComponent,
        TareasSimpleComponent
     ],        
     imports: [
      FormsModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
