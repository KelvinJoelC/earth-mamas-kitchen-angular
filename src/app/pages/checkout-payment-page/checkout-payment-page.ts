import { Component, inject } from '@angular/core';
import { CheckoutStore } from '../../core/stores/checkout.store';

@Component({
  selector: 'app-checkout-payment-page',
  imports: [],
  templateUrl: './checkout-payment-page.html',
  styleUrl: './checkout-payment-page.scss',
})
export class CheckoutPaymentPage {
  private readonly checkout: CheckoutStore = inject(CheckoutStore);
  
  continue() {
    this.checkout.goTo('confirm');
  }
}
