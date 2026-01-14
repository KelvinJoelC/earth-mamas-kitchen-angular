import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { CheckoutStore } from "../stores/checkout.store";

export const checkoutDetailsGuard: CanActivateFn = () => {
  const checkout = inject(CheckoutStore);
  const router = inject(Router);

  if (!checkout.isDetailsCompleted()) {
    router.navigate(['/checkout/details']);
    return false;
  }

  return true;
};
