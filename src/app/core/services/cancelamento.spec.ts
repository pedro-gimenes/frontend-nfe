import { TestBed } from '@angular/core/testing';

import { Cancelamento } from './cancelamento';

describe('Cancelamento', () => {
  let service: Cancelamento;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cancelamento);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
