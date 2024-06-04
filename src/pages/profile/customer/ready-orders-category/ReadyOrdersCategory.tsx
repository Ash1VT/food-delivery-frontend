import React from 'react'
import OrderDetails from '../../order-details/OrderDetails'
import { CustomerReadyOrdersCategoryProps } from '../../profile.types'
import './ready_orders_category.css'

const ReadyOrdersCategory = ({currentUser, orders} : CustomerReadyOrdersCategoryProps) => {
    return (
        <div className="ready__orders__category__container">
            {orders.length === 0 && (
                <div className='ready__orders__category__text'>You don't have any Ready Orders</div>
            )}
            {orders.map((order) => (
                <OrderDetails key={order.id} currentUser={currentUser} order={order}/>
            ))}
        </div>
    )
}

export default ReadyOrdersCategory