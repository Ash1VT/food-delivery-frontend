import { Stripe, StripeCardElement } from "@stripe/stripe-js";

export interface PaymentOrderData {
    stripe: Stripe
    clientSecretKey: string
    card: StripeCardElement
}