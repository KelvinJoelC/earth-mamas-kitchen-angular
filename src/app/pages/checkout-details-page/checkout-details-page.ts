import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckoutStore } from '../../core/stores/checkout.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-details-page',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout-details-page.html',
  styleUrl: '././checkout-details-page.scss',
})
export class CheckoutDetailsPage {

  private readonly checkout: CheckoutStore = inject(CheckoutStore);
  private readonly router = inject(Router);

  readonly form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    notes: new FormControl(''),
  });

  submit() {
    //this.checkout.setDetails(this.form.getRawValue()); //TODO: Uncomment when Order type is fixed
    this.router.navigate(['/checkout/payment']);
  }
}
