import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  standalone: true,
  selector: 'app-cart-page',
  templateUrl: './cart-page.html',
})
export class CartPage {
  readonly cart = inject(CartService);
}
