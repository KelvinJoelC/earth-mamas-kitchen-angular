import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelCheckoutSteps } from './kel-checkout-steps';

describe('KelCheckoutSteps', () => {
  let component: KelCheckoutSteps;
  let fixture: ComponentFixture<KelCheckoutSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelCheckoutSteps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelCheckoutSteps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
