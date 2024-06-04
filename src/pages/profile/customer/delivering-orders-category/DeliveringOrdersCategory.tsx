import React from 'react'
import OrderDetails from '../../order-details/OrderDetails'
import { CustomerDeliveringOrdersCategoryProps } from '../../profile.types'
import './delivering_orders_category.css'

const DeliveringOrdersCategory = ({currentUser, orders} : CustomerDeliveringOrdersCategoryProps) => {
    return (
        <div className="delivering__orders__category__container">
            {orders.length === 0 && (
                <div className='delivering__orders__category__text'>You don't have any Delivering Orders</div>
            )}
            {orders.map((order) => (
                <OrderDetails key={order.id} currentUser={currentUser} order={order}/>
            ))}
        </div>
    )
}

export default DeliveringOrdersCategory