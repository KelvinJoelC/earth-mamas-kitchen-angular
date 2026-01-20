import { supabase } from "../../../supabase";
import { computed, inject, Injectable, signal } from '@angular/core';
import { Order } from "../models/order.model";
import { CartService } from "./cart.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root',
})
export class OrderApiService {
  //Devolver éxito / error
  //Crear pedidos


  private readonly cart = inject(CartService);
  private readonly router = inject(Router);

  private readonly _loading = signal(false);
  readonly loading = computed(() => this._loading());

  async create(order: Order): Promise<void> {
    this._loading.set(true);

    try {
      const { error } = await supabase
        .from('orders')
        .insert(order);

      if (error) throw error;

      this.cart.clear();
      this.router.navigate(['/checkout/success']);

    } catch (err) {
      throw err;
    } finally {
      this._loading.set(false);
    }
  }
}