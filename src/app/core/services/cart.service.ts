import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { CartStorageService } from '../storage/cart.storage';

@Injectable({ providedIn: 'root' })
export class CartService {

  private readonly _items = signal<CartItem[]>([]);
  private readonly _loading = signal(false);

  readonly items = computed(() => this._items());
  readonly loading = computed(() => this._loading());

  readonly total = computed(() =>
    this._items().reduce((sum, i) => sum + i.totalPrice, 0)
  );
  //TODO fix count type
  readonly count = computed(() => this._items().length);

  constructor(private storage: CartStorageService) {
    this._items.set(this.storage.load());
  }

  add(item: CartItem): void {
    const updated = [...this._items(), item];
    this._items.set(updated);
    this.storage.save(updated);
  }

  remove(id: string): void {
    const updated = this._items().filter(i => i.id !== id);
    this._items.set(updated);
    this.storage.save(updated);
  }

  clear(): void {
    this._items.set([]);
    this.storage.clear();
  }
}
