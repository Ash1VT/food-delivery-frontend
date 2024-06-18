import { useStripe, CardElement, Elements } from "@stripe/react-stripe-js"
import './payment_card.css'


const PaymentCard = () => {
    return (
        <div className="payment__card__container">
            <CardElement id="card-element"/>
        </div>
    )
}

export default PaymentCard