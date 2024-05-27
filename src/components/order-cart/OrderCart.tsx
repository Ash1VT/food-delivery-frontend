import OrderCartItemsList from './order-cart-items-list/OrderCartItemsList';
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import { getOrderCartItems } from '../../redux/selectors/orderCartSelectors';
import OrderCartButton from './ui/buttons/order-cart-button/OrderCartButton';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';
import { OrderCartWithItemsProps } from './order_cart.types';
import { calculateOrderCartTotalPrice } from './utils/price';
import { fetchOrderCartItemsFromLocalStorage } from 'src/redux/reducers/orderCartReducer';
import './order_cart.css'


const OrderCartWithItems = ({items} : OrderCartWithItemsProps) => {
    const totalPrice = calculateOrderCartTotalPrice(items)

    return (
        <>
            <OrderCartItemsList items={items}/>
            <div className="order__cart__button">
                <OrderCartButton totalPrice={totalPrice} onOrdered={() => {}}/>
            </div>
        </>
    )
}

const OrderCartEmpty = () => {
    return (
        <div className="order__cart__empty">
            Cart is empty
        </div>
    )
}


const OrderCart = () => {
    const orderCartItems = useAppSelector(state => getOrderCartItems(state))
    const itemsCount = orderCartItems.length
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOrderCartItemsFromLocalStorage())
    }, [])

    return (
        <div className="order__cart__container">
            <div className="order__cart__wrapper">
                <div className="order__cart__title">
                    Cart
                </div>
                <div className="order__cart__content">
                    {itemsCount ? 
                        <OrderCartWithItems items={orderCartItems}/> 
                        : 
                        <OrderCartEmpty/>}
                </div>
            </div>
        </div>
    )
}

export default OrderCart;