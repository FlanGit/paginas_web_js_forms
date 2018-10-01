import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './core/cabecera/cabecera.component';
import { MenuComponent } from './core/menu/menu.component';
import { MainComponent } from './core/main/main.component';
import { PieComponent } from './core/pie/pie.component';
import { LogoComponent } from './core/logo/logo.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CabeceraComponent,
        MenuComponent,
        MainComponent,
        PieComponent,
        LogoComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Proyecto');
  }));
});
