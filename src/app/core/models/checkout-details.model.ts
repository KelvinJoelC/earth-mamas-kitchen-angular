export interface CheckoutCustomer {
  name?: string;
  email?: string;
  phone?: string;
  notes?: string;
}

export type CheckoutStep = 'details' | 'payment' | 'confirm';
