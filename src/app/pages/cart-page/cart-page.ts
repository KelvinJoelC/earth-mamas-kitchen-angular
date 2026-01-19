import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  standalone: true,
  selector: 'app-cart-page',
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  readonly cart = inject(CartService);

  objectEntries(obj: Record<string, any>) {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
  }

  activeAddOns(addOns: Record<string, boolean>) {
    return Object.entries(addOns)
      .filter(([, value]) => value)
      .map(([key]) => key);
  }

}
