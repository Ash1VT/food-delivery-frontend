import { CardElement } from '@stripe/react-stripe-js';
import { PaymentIntentResult, Stripe, StripeCardElement } from "@stripe/stripe-js";
import { PaymentOrderData } from 'src/models/payment.interfaces';

export class PaymentService {

    public static async payForOrder(data: PaymentOrderData): Promise<PaymentIntentResult> {
        return await data.stripe.confirmCardPayment(data.clientSecretKey, {
            payment_method: {
                card: data.card
            }
        })
    }

}