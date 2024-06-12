import React from 'react'
import OrderDetails from '../../../../components/order-details/OrderDetails'
import { CustomerDeliveredOrdersCategoryProps } from '../../profile.types'
import './delivered_orders_category.css'

const DeliveredOrdersCategory = ({currentUser, orders, onCourierReviewCreated} : CustomerDeliveredOrdersCategoryProps) => {
    return (
        <div className="delivered__orders__category__container">
            {orders.length === 0 && (
                <div className='delivered__orders__category__text'>You don't have any Delivered Orders</div>
            )}
            {orders.map((order) => (
                <OrderDetails key={order.id} currentUser={currentUser} order={order} onOrderReviewCreated={onCourierReviewCreated}/>
            ))}
        </div>
    )
}

export default DeliveredOrdersCategory