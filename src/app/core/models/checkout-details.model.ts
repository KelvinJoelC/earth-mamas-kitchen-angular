export interface CheckoutDetails {
  fullName: string;
  email: string;
  phone?: string;
  notes?: string;
}

export type CheckoutStep = 'details' | 'review' | 'completed';
