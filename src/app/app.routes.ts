import { Routes } from '@angular/router';
import { productsResolver } from './core/resolvers/products.resolver';
import { checkoutDetailsGuard } from './core/guards/checkout-payment-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home-page/home-page')
            .then(m => m.HomePage)
      },
      {
        path: 'collection',
        loadComponent: () =>
          import('./pages/collection-page/collection-page')
            .then(m => m.CollectionPage)
      },
      {
        path: 'collection/:id',
        loadComponent: () =>
          import('./pages/collection-item-page/collection-item-page')
            .then(m => m.CollectionItemPage),
        resolve: { products: productsResolver }
      }, {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart-page/cart-page').then(m => m.CartPage),
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout-page/checkout-page')
            .then(m => m.CheckoutPage),
        children: [
          {
            path: '',
            redirectTo: 'details',
            pathMatch: 'full'
          },
          {
            path: 'details',
            loadComponent: () =>
              import('./pages/checkout-details-page/checkout-details-page')
                .then(m => m.CheckoutDetailsPage)
          },
          {
            path: 'payment',
            loadComponent: () =>
              import('./pages/checkout-payment-page/checkout-payment-page')
                .then(m => m.CheckoutPaymentPage),
            canActivate: [checkoutDetailsGuard]
          },
          {
            path: 'confirmation',
            loadComponent: () =>
              import('./pages/checkout-confirm-page/checkout-confirm-page')
                .then(m => m.CheckoutConfirmPage),
            canActivate: [checkoutDetailsGuard] //TODO: checkoutPayesGuard
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }];
