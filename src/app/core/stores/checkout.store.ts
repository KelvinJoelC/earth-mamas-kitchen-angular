import { Injectable, signal, computed } from '@angular/core';
import { CheckoutStep } from '../models/checkout-details.model';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class CheckoutStore {

  private readonly _step = signal<CheckoutStep>('details');
  private readonly _details = signal<Order | null>(null);

  readonly step = computed(() => this._step());
  readonly details = computed(() => this._details());

  readonly isDetailsCompleted = computed(() =>
    this._details()
  );

  goTo(step: CheckoutStep) {
    this._step.set(step);
  }

  setDetails(details: Order) {
    this._details.set(details);
    this._step.set('review');
  }

  reset() {
    this._step.set('details');
    this._details.set(null);
  }
  
}
