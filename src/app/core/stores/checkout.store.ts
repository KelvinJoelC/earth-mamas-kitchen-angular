import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../../core/models/cart.model';
import { CheckoutCustomer, CheckoutStep } from '../../core/models/checkout-details.model';

@Injectable({ providedIn: 'root' })
export class CheckoutStore {

  cart = signal<CartItem[]>([]);
  details = signal<CheckoutCustomer | null>(null);
  paymentCompleted = signal(false);
  orderId = signal<string | null>(null);

  subtotal = computed(() => this.cart().reduce((acc, i) => acc +  0 * 1, 0)); // i.price  i.qty
  deliveryPrice = signal(0);
  total = computed(() => this.subtotal() + this.deliveryPrice());

  currentStep = signal<CheckoutStep>('details');

  goTo(step: CheckoutStep) {
    this.currentStep.set(step);
  }

  setDetails(details: CheckoutCustomer) {
    this.details.set(details);
    this.goTo('payment');
  }

  completePayment(orderId: string) {
    this.paymentCompleted.set(true);
    this.orderId.set(orderId);
    this.goTo('confirm');
  }

  reset() {
    this.cart.set([]);
    this.details.set(null);
    this.paymentCompleted.set(false);
    this.orderId.set(null);
    this.currentStep.set('details');
    this.deliveryPrice.set(0);
  }
}
