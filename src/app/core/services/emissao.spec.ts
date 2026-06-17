import { TestBed } from '@angular/core/testing';

import { Emissao } from './emissao';

describe('Emissao', () => {
  let service: Emissao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Emissao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
