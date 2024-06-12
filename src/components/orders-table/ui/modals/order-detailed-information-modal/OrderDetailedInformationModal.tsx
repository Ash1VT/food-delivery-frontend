import React from 'react'
import OrderDetails from 'src/components/order-details/OrderDetails'
import { OrderDetailedInformationModalProps } from 'src/components/orders-table/orders_table.types'
import './order_detailed_information_modal.css'

const OrderDetailedInformationModal = ({currentUser, order} : OrderDetailedInformationModalProps) => {
    return (
        <div className='order__detailed__information__modal__container'>
            <OrderDetails currentUser={currentUser} order={order}/>
        </div>
    )
}

export default OrderDetailedInformationModal