import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-confirm-page',
  imports: [],
  templateUrl: './checkout-confirm-page.html',
  styleUrl: './checkout-confirm-page.scss',
})
export class CheckoutConfirmPage {

  // async onSubmit() {
  //   const order: Order = {
  //     // details: detail, 
  //     items: this.cart.items(),
  //     total: this.cart.total(),
  //     createdAt: new Date().toISOString()
  //   };

  //   try {
  //     await this.orders.create(order);
  //   } catch {
  //     // TODO: Modal service to show error
  //   }
  // }
}
