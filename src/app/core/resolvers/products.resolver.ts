import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProductService } from '../services/product.service';

export const productsResolver: ResolveFn<boolean> = async () => {
  const productService = inject(ProductService);
  await productService.loadProducts();
  return true;
};
