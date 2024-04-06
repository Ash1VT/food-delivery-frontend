import { useState } from 'react';
import OrderCartItem from './order-cart-item/OrderCartItem'
import OrderCartItemsList from './order-cart-items-list/OrderCartItemsList';
import './order_cart.css'
import { OrderCartItemProps, OrderCartProps } from './order_cart.types';
import { OrderCartTotalPriceContext } from './contexts/OrderCartTotalPriceContext';

const calculateTotalPrice = (items: OrderCartItemProps[]) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

const OrderCart = ({items} : OrderCartProps) => {
    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(items))
    
    const orderCartTotalPriceContext = {
        totalPrice,
        setTotalPrice
    }
    
    const itemsCount = items.length

    const OrderCartWithItems = () => {
        return (
            <OrderCartTotalPriceContext.Provider value={orderCartTotalPriceContext}>
                <OrderCartItemsList items={
                    items.map((item) => {
                        return {
                            ...item,
                            setTotalPrice
                        }
                    }
                )}/> 
                <div className="order__cart__total">
                    {totalPrice}$
                </div>
            </OrderCartTotalPriceContext.Provider>
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