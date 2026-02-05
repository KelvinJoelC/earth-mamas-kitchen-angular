import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { CheckoutStore } from "../stores/checkout.store";

export const checkoutDetailsGuard: CanActivateFn = () => {
  const store: CheckoutStore = inject(CheckoutStore);
  const router = inject(Router);

  // if (!store.isDetailsCompleted()) {
  //   router.navigate(['/checkout/details']);
  //   return false;
  // }

  return true;
};
