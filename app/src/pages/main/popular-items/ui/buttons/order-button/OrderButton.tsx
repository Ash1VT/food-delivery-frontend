import { OrderButtonProps } from 'src/types/buttons.types'
import 'src/styles/buttons.css'
import './order_button.css'

const OrderButton = ({onClick}: OrderButtonProps) => {
    return (
        <div className="button__wrapper order__button__wrapper" onClick={onClick} role="button">
            <div className="button__text order__button__text">
                Order Now
            </div>
        </div>
    )
}

export default OrderButton