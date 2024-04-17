import React from 'react'
import OrderCartItem from '../order-cart-item/OrderCartItem'
import { OrderCartItemsListProps } from '../order_cart.types'
import './order_cart_items_list.css'

const OrderCartItemsList = ({items} : OrderCartItemsListProps) => {
    
    return (
        <div className="order__cart__items__list">
            {items.map((item) => (
                    <OrderCartItem
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </div>
    )
}

export default OrderCartItemsList