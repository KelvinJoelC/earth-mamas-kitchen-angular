import { Component, computed, inject } from '@angular/core';
import { CheckoutStore } from '../../core/stores/checkout.store';

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss',
})
export class OrderSummary {
private store = inject(CheckoutStore);

  cart = this.store.cart;
  subtotal = this.store.subtotal;
  deliveryPrice = this.store.deliveryPrice;
  total = this.store.total;
  details = this.store.details;

  orderType = computed(() =>  'pickup'); // this.details()?.orderType ??
}
