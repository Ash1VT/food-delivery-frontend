import { OrderCartButtonProps } from 'src/components/order-cart/order_cart.types'
import EastIcon from '@mui/icons-material/East';
import './order_cart_button.css'

const OrderCartButton = ({totalPrice, onOrdered} : OrderCartButtonProps) => {
    return (
        <button className="button__wrapper order__cart__button__wrapper" onClick={onOrdered}>
            <div className="order__cart__total">
                {totalPrice}$
            </div>
            <div className="order__cart__button__labels">
                <p className="button__text order__cart__button__text">Proceed to order</p>
                <EastIcon/>
            </div>
        </button>
    )
}

export default OrderCartButton