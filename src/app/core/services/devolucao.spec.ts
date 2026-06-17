import { TestBed } from '@angular/core/testing';

import { Devolucao } from './devolucao';

describe('Devolucao', () => {
  let service: Devolucao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Devolucao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
