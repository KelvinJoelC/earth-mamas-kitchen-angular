import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';

const KEY = 'earth-mama-cart';

@Injectable({ providedIn: 'root' })
export class CartStore {

  load(): CartItem[] {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  save(items: CartItem[]): void {
    localStorage.setItem(KEY, JSON.stringify(items));
  }

  clear(): void {
    localStorage.removeItem(KEY);
  }
}
