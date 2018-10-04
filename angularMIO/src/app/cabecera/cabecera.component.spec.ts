import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cabeceraComponent } from './cabecera.component';

describe('cabeceracomponent', () => {
  let component: cabeceraComponent;
  let fixture: ComponentFixture<cabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cabeceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
