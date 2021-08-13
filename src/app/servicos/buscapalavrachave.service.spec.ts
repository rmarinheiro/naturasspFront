import { TestBed } from '@angular/core/testing';

import { BuscapalavrachaveService } from './buscapalavrachave.service';

describe('BuscapalavrachaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscapalavrachaveService = TestBed.get(BuscapalavrachaveService);
    expect(service).toBeTruthy();
  });
});
