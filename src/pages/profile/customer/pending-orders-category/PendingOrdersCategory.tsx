import React from 'react'
import OrderDetails from '../../order-details/OrderDetails'
import { CustomerPendingOrdersCategoryProps } from '../../profile.types'
import './pending_orders_category.css'

const PendingOrdersCategory = ({currentUser, orders} : CustomerPendingOrdersCategoryProps) => {
    return (
        <div className="pending__orders__category__container">
            {orders.length === 0 && (
                <div className='pending__orders__category__text'>You don't have any Pending Orders</div>
            )}
            {orders.map((order) => (
                <OrderDetails key={order.id} currentUser={currentUser} order={order}/>
            ))}
        </div>
    )
}

export default PendingOrdersCategory