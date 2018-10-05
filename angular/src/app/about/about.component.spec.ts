import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { MatCheckboxModule } from '@angular/material';
import { ArticuloComponent } from '../articulo/articulo.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AboutComponent,
        ArticuloComponent
       ],
      imports: [MatCheckboxModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
