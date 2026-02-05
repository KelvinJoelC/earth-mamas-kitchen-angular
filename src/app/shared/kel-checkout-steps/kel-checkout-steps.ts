import { Component, computed, inject } from '@angular/core';
import { CheckoutStore } from '../../core/stores/checkout.store';

@Component({
  selector: 'app-kel-checkout-steps',
  imports: [],
  templateUrl: './kel-checkout-steps.html',
  styleUrl: './kel-checkout-steps.scss',
})
export class KelCheckoutSteps {

  private readonly store: CheckoutStore = inject(CheckoutStore);

  currentStep = computed(() => this.store.currentStep());

  steps: { label: string, icon: string, key: 'details' | 'payment' | 'confirm' }[] = [
    { label: 'Details', icon: '🍰', key: 'details' },
    { label: 'Payment', icon: '💳', key: 'payment' },
    { label: 'Confirm', icon: '🎉', key: 'confirm' }
  ];

  getStepClass(stepKey: 'details' | 'payment' | 'confirm') {
    const keys = ['details', 'payment', 'confirm'];
    const currentIndex = keys.indexOf(this.currentStep());
    const stepIndex = keys.indexOf(stepKey);

    if(stepIndex < currentIndex) return 'completed';
    if(stepIndex === currentIndex) return 'active';
    return 'pending';
  }

}
