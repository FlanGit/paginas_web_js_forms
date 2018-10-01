import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPlusComponent } from './tareas-plus.component';

describe('TareasPlusComponent', () => {
  let component: TareasPlusComponent;
  let fixture: ComponentFixture<TareasPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
