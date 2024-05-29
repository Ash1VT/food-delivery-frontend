import React from 'react'
import { OrderItemProps } from '../order_placing_page.types'
import './order_item.css'
const OrderItem = ({name, imageUrl, quantity, price} : OrderItemProps) => {
    return (
        <tr>
            <td>
                <div className="order__item__image__wrapper">
                    <img className="order__item__image" src={imageUrl} alt="image"/>
                </div>
            </td>
            <td>
                <div className="order__item__name">{name}</div>
            </td>
            <td>
                <div className="order__item__text order__item__quantity">{quantity}</div>
            </td>
            <td>
                <div className="order__item__text order__item__price">{price}$</div>
            </td>
            <td>
                <div className="order__item__text order__item__total">{quantity * price}$</div>
            </td>
        </tr>
    )
}

export default OrderItem