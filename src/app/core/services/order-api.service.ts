import { supabase } from "../../../supabase";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Order } from "../models/order.model";
@Injectable({
  providedIn: 'root',
})
export class OrderApiService {

  private _cartItems = new BehaviorSubject<Order[]>([]);
  cartItems$ = this._cartItems.asObservable();

  async addItem(order: Order): Promise<any> {
    const currentCart = this._cartItems.value;
    this._cartItems.next([...currentCart, order]);
    const { data, error } = await supabase
      .from('orders')
      .insert(order)
      .select('*'); //To Obtain the inserted record

    if (error) {
      // Revert the cart 
      this._cartItems.next(currentCart);
      throw new Error(error.message);
    }
    return {
      data: data
    }

  }
}