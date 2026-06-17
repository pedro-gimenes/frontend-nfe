import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imposto } from './imposto';

describe('Imposto', () => {
  let component: Imposto;
  let fixture: ComponentFixture<Imposto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imposto],
    }).compileComponents();

    fixture = TestBed.createComponent(Imposto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
