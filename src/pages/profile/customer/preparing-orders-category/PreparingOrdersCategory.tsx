import React from 'react'
import OrderDetails from '../../order-details/OrderDetails'
import { CustomerPreparingOrdersCategoryProps } from '../../profile.types'
import './preparing_orders_category.css'

const PreparingOrdersCategory = ({currentUser, orders} : CustomerPreparingOrdersCategoryProps) => {
    return (
        <div className="preparing__orders__category__container">
            {orders.length === 0 && (
                <div className='preparing__orders__category__text'>You don't have any Preparing Orders</div>
            )}
            {orders.map((order) => (
                <OrderDetails key={order.id} currentUser={currentUser} order={order}/>
            ))}
        </div>
    )
}

export default PreparingOrdersCategory