import { TestBed } from '@angular/core/testing';

import { ComunidadAutonomaService } from './comunidad-autonoma.service';

describe('ComunidadAutonomaService', () => {
  let service: ComunidadAutonomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunidadAutonomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
