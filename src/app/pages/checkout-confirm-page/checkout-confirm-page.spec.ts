import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutConfirmPage } from './checkout-confirm-page';

describe('CheckoutConfirmPage', () => {
  let component: CheckoutConfirmPage;
  let fixture: ComponentFixture<CheckoutConfirmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutConfirmPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutConfirmPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
