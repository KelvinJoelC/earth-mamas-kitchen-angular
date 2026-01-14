import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDetailsPage } from './checkout-details-page';

describe('CheckoutDetailsPage', () => {
  let component: CheckoutDetailsPage;
  let fixture: ComponentFixture<CheckoutDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
