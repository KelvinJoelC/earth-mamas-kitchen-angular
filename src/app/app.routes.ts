import { Routes } from '@angular/router';
import { productsResolver } from './core/resolvers/products.resolver';

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
          import ('./pages/collection-page/collection-page')
            .then(m => m.CollectionPage)
      },
      {
        path: 'collection/:id',
        loadComponent: () =>
          import ('./pages/collection-item-page/collection-item-page')
            .then(m => m.CollectionItemPage),
        resolve: { products: productsResolver }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }];
