import { Routes } from '@angular/router';

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
        path: 'catalog',
        loadComponent: () =>
          import ('./pages/catalog-page/catalog-page')
            .then(m => m.CatalogPage)
      },
      {
        path: 'catalog/:id',
        loadComponent: () =>
          import ('./pages/catalog-item-page/catalog-item-page')
            .then(m => m.CatalogItemPage)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }];
