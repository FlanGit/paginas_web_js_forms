import { TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [UsuariosService]
  }));

  it('should be created', () => {
    const service: UsuariosService = TestBed.get(UsuariosService);
    expect(service).toBeTruthy();
  });
});
