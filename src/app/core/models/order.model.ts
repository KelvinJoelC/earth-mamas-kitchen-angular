import { CartItem } from "./cart.model";
import { CheckoutCustomer } from "./checkout-details.model";

export interface Order {
  checkoutDetails: CheckoutCustomer;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}
