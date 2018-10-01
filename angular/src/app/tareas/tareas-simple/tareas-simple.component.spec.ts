import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasSimpleComponent } from './tareas-simple.component';
import { FormsModule } from '@angular/forms';

describe('TareasSimpleComponent', () => {
  let component: TareasSimpleComponent;
  let fixture: ComponentFixture<TareasSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasSimpleComponent ],
      imports: [ FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
