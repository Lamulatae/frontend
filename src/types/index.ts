export interface Booking {
  date: string;
  time: string;
  depositAmount: number;
  paymentMethod?: PaymentMethod;
  billingDetails?: BillingDetails;
}

export type PaymentMethod = "zelle" | "apple-pay" | "stripe" | "credit-card";

export interface PaymentDetails {
  zelleEmail?: string;
  zellePhone?: string;
  applePayToken?: string;
  stripeToken?: string;
  creditCardDetails?: CreditCardDetails;
}

export interface CreditCardDetails {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface BillingDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}
