import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckoutStore } from '../../core/stores/checkout.store';
import { OrderApiService } from '../../core/services/order-api.service';

@Component({
  selector: 'app-checkout-page',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.scss',
})
export class CheckoutPage {
  private readonly cart = inject(CartService);
  private readonly store = inject(CheckoutStore);
  private readonly orders = inject(OrderApiService);

  readonly items = this.cart.items;
  // readonly total = this.cart.total; //TODO fix type
  // readonly count = this.cart.count;

  checkoutForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    notes: new FormControl('')
  });
}