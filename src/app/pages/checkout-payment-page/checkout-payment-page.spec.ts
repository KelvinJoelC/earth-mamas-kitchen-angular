import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPaymentPage } from './checkout-payment-page';

describe('CheckoutPaymentPage', () => {
  let component: CheckoutPaymentPage;
  let fixture: ComponentFixture<CheckoutPaymentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPaymentPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPaymentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
