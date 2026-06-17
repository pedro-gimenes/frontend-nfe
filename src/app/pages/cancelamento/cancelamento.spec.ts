import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancelamento } from './cancelamento';

describe('Cancelamento', () => {
  let component: Cancelamento;
  let fixture: ComponentFixture<Cancelamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cancelamento],
    }).compileComponents();

    fixture = TestBed.createComponent(Cancelamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
