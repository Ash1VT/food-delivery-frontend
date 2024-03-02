import { OrderButtonProps } from 'src/types/buttons.types'
import './order_button.css'


const OrderButton = ({onClick}: OrderButtonProps) => {
    return (
        <div className="order__button__wrapper" onClick={onClick} role="button">
            <div className="order__button__text">
                Order Now
            </div>
        </div>
    )
}

export default OrderButton