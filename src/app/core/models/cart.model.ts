export interface CartItem {
  id: string;
  productId: string;
  title: string;
  options: Record<string, any>;
  totalPrice?: number;
}
