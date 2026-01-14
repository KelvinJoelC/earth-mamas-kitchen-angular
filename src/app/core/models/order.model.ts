import { CartItem } from "./cart.model";

export interface Order {
  id: string;
  email: string;

  items: CartItem[];
  total: number;

  createdAt: string;
}
