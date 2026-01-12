import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

const KEY = 'products';

@Injectable({ providedIn: 'root' })
export class ProductsStorageService {

    load(): Product[] {
        if (typeof window === 'undefined') return [];
        return JSON.parse(localStorage.getItem(KEY) ?? '[]');
    }

    save(items: Product[]) {
        localStorage.setItem(KEY, JSON.stringify(items));
    }

    clear() {
        localStorage.removeItem(KEY);
    }
}