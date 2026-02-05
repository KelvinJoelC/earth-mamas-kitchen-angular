import { Component, inject } from '@angular/core';
import { CheckoutStore } from '../../core/stores/checkout.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-confirm-page',
  imports: [],
  templateUrl: './checkout-confirm-page.html',
  styleUrl: './checkout-confirm-page.scss',
})
export class CheckoutConfirmPage {

   private store = inject(CheckoutStore);
  private router = inject(Router);

  cart = this.store.cart;
  details = this.store.details;
  orderId = this.store.orderId;
  total = this.store.total;

  backToHome() {
    this.store.reset(); 
    this.router.navigate(['/']);
  }
}
