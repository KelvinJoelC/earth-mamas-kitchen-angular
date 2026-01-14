import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.scss',
})
export class CheckoutPage {
  readonly cart = inject(CartService);
  private fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    email: [''],
    notes: [''],
  });
}