import { OrderButtonProps } from '../../types/button.type'

import '../../styles/buttons/order_button.css'


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