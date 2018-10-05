import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactosComponent } from './lista-contactos.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { UsuariosService } from '../../services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListaContactosComponent', () => {
  let component: ListaContactosComponent;
  let fixture: ComponentFixture<ListaContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListaContactosComponent,
        ContactoComponent
      ],
      imports: [HttpClientModule],
      providers: [UsuariosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
