import React, { useCallback } from 'react'
import { OrderItemCounterProps } from '../order_cart.types'
import './order_item_counter.css'


const OrderItemCounter = ({ quantity, onQuantityChanged } : OrderItemCounterProps) => {
    
    const decreaseQuantity = () => {
        if (quantity > 1) {
            onQuantityChanged(quantity - 1)
        }
    }

    const increaseQuantity = () => {
        onQuantityChanged(quantity + 1)
    }

    return (
        <div className="order__item__counter__container">
            <button className="button__wrapper order__item__counter__button order__item__counter__button__left order__item__counter__button__text" onClick={decreaseQuantity}>-</button>
            <div className="order__item__counter__value">{quantity}</div>
            <button className="button__wrapper order__item__counter__button order__item__counter__button__right order__item__counter__button__text" onClick={increaseQuantity}>+</button>
        </div>
    )
}

export default OrderItemCounter