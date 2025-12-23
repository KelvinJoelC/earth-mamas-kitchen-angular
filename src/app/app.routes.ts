import { Routes } from '@angular/router';
import { CatalogList } from './features/catalog/catalog-list/catalog-list';

export const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: CatalogList },
  
];
