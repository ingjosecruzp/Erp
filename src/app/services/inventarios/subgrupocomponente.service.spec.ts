import { TestBed, inject } from '@angular/core/testing';

import { SubgrupocomponenteService } from './subgrupocomponente.service';

describe('SubgrupocomponenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubgrupocomponenteService]
    });
  });

  it('should be created', inject([SubgrupocomponenteService], (service: SubgrupocomponenteService) => {
    expect(service).toBeTruthy();
  }));
});
