import OrderCartItemsList from './order-cart-items-list/OrderCartItemsList';
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import { getOrderCartItems, getOrderCartTotalPrice } from './redux/selectors';
import OrderCartButton from './ui/buttons/order-cart-button/OrderCartButton';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';
import { fetchOrderCartItemsFromLocalStorage } from './redux/reducers/orderCartReducer';
import './order_cart.css'

const OrderCart = () => {
    const orderCartItems = useAppSelector(state => getOrderCartItems(state))
    const dispatch = useAppDispatch()
    const totalPrice = useAppSelector(state => getOrderCartTotalPrice(state))
    const itemsCount = orderCartItems.length

    useEffect(() => {
        dispatch(fetchOrderCartItemsFromLocalStorage())
    }, [])

    const OrderCartWithItems = () => {
        return (
            <>
                <OrderCartItemsList items={
                    orderCartItems.map((item) => {
                        return {
                            ...item
                        }
                    }
                )}/>
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


    return (
        <div className="order__cart__container">
            <div className="order__cart__wrapper">
                <div className="order__cart__title">
                    Cart
                </div>
                <div className="order__cart__content">
                    {itemsCount ? 
                        <OrderCartWithItems/>
                        : 
                        <OrderCartEmpty/>
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderCart;