import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckoutStore } from '../../core/stores/checkout.store';
import { OrderApiService } from '../../core/services/order-api.service';
import { KelCheckoutSteps } from '../../shared/kel-checkout-steps/kel-checkout-steps';
import { OrderSummary } from '../../features/order-summary/order-summary';

@Component({
  selector: 'app-checkout-page',
  imports: [RouterOutlet, ReactiveFormsModule, KelCheckoutSteps, OrderSummary],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.scss',
})
export class CheckoutPage {

  private readonly router = inject(Router);
  private readonly store = inject(CheckoutStore);
  
  cart = this.store.cart;

  constructor() {
    // effect(() => {
    //   if (this.cart().length === 0) {
    //     this.router.navigate(['/cart']);
    //   }
    // });
  }

}