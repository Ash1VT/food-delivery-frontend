import React from 'react'
import { OrderItemProps } from '../order_placing_page.types'
import './order_item.css'
import OrderItemCounter from 'src/components/order-cart/order-item-counter/OrderItemCounter'
const OrderItem = ({item, onQuantityChanged} : OrderItemProps) => {

    const hangleItemQuantityChanged = async (newQuantity: number) => {
        await onQuantityChanged(item.id, newQuantity)
    }

    return (
        <tr>
            <td>
                <div className="order__item__image__wrapper">
                    <img className="order__item__image" src={item.menuItemImageUrl} alt="image"/>
                </div>
            </td>
            <td>
                <div className="order__item__name order__item__margin__left">{item.menuItemName}</div>
            </td>
            <td>
                <div className="order__item__text order__item__quantity order__item__margin__left">
                    <OrderItemCounter quantity={item.quantity} onQuantityChanged={hangleItemQuantityChanged}/>
                </div>
            </td>
            <td>
                <div className="order__item__text order__item__price order__item__margin__left">{item.menuItemPrice}$</div>
            </td>
            <td>
                <div className="order__item__text order__item__total order__item__margin__left">{item.quantity * item.menuItemPrice}$</div>
            </td>
        </tr>
    )
}

export default OrderItem