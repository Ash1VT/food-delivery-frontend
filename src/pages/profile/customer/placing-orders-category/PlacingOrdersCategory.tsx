import React from 'react'
import OrderDetails from '../../../../components/order-details/OrderDetails'
import { CustomerPlacingOrdersCategoryProps } from '../../profile.types'
import './placing_orders_category.css'

const PlacingOrdersCategory = ({currentUser, orders, onOrderPlaced} : CustomerPlacingOrdersCategoryProps) => {
    return (
        <div className="placing__orders__category__container">
            {orders.length === 0 && (
                <div className='placing__orders__category__text'>You don't have any Placing Orders</div>
            )}
            {orders.map((order) => (
                <OrderDetails key={order.id} currentUser={currentUser} order={order} onOrderPlaced={onOrderPlaced}/>
            ))}
        </div>
    )
}

export default PlacingOrdersCategory