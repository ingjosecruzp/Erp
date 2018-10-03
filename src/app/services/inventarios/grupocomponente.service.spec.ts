import { TestBed, inject } from '@angular/core/testing';

import { GrupocomponenteService } from './grupocomponente.service';

describe('GrupocomponenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrupocomponenteService]
    });
  });

  it('should be created', inject([GrupocomponenteService], (service: GrupocomponenteService) => {
    expect(service).toBeTruthy();
  }));
});
