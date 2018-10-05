import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    component.contacto = {
      gender: '',
      name: {
          title: '',
          first: '',
          last: ''
      },
      location: {
          street: '',
          city: '',
          state: '',
          postcode: '',
          coordinates: {
              latitude: '',
              longitude: ''
          },
          timezone: {
              offset: '',
              description: ''
          }
      },
      email: '',
      login: {
          uuid: '',
          username: '',
          password: '',
          salt: '',
          md5: '',
          sha1: '',
          sha256: ''
      },
      dob: {
          date: '',
          age: 0
      },
      registered: {
          date: '',
          age: 0
      },
      phone: '',
      cell: '',
      id: {
          name: '',
          value: ''
      },
      picture: {
          large: '',
          medium: '',
          thumbnail: ''
      },
      nat: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
