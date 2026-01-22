import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  
  private readonly _loading = signal(false);
  readonly loading = computed(() => this._loading());
  
  private readonly _items = signal<CartItem[]>([]);
  readonly items = computed(() => this._items());
  readonly count = computed(() => this._items().length);


  add(item: CartItem): () => void {
    const previous = this._items();
    this._items.set([...previous, item]);

    // rollback function
    return () => this._items.set(previous);
  }

  clear(): void {
    this._items.set([]);
  }
//   Orquestar el carrito
// Usar CartStore
// Calcular totales
}
