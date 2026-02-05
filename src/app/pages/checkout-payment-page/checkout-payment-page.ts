import { Component, inject } from '@angular/core';
import { CheckoutStore } from '../../core/stores/checkout.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-payment-page',
  imports: [],
  templateUrl: './checkout-payment-page.html',
  styleUrl: './checkout-payment-page.scss',
})
export class CheckoutPaymentPage {


  private readonly router = inject(Router);
  private readonly store: CheckoutStore = inject(CheckoutStore);
  
  cart = this.store.cart;
  details = this.store.details;
  total = this.store.total;

  loading = false;

  pay() {
    if (this.cart().length === 0 || !this.details()) return;

    this.loading = true;

    //simulate payment processing
    setTimeout(() => {
      const orderId = 'ORD' + Math.floor(Math.random() * 10000);
      this.store.completePayment(orderId);
      this.router.navigate(['/checkout/confirm']);
    }, 1500);
  }
}
