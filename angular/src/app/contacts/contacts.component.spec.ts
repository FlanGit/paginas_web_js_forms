import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UsuariosService } from '../services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';


describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ContactsComponent,
        ListaContactosComponent,
        ContactoComponent
       ],
       imports: [HttpClientModule],
       providers: [UsuariosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
