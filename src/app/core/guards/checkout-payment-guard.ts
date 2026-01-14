import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const checkoutDetailsGuard: CanActivateFn = () => {
  const checkout = inject(CheckoutStore);
  const router = inject(Router);

  if (!checkout.isDetailsComplete()) {
    router.navigate(['/checkout/details']);
    return false;
  }

  return true;
};
