import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Tarta de Chocolate', description: 'Deliciosa tarta de chocolate', price: 25, imageUrl: 'assets/images/chocolate.jpg' },
    { id: 2, name: 'Tarta de Fresa', description: 'Fresca y dulce', price: 20, imageUrl: 'assets/images/strawberry.jpg' },
    { id: 3, name: 'Tarta de Limón', description: 'Ácida y refrescante', price: 22, imageUrl: 'assets/images/lemon.jpg' },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
