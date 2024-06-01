import React from 'react'
import { OrderActionButtonProps } from 'src/components/orders-table/orders_table.types'
import './order_action_button.css'

const OrderActionButton = ({buttonLabel, onClick}: OrderActionButtonProps) => {
    return (
        <button className="button__wrapper order__action__button" onClick={onClick}>
            {buttonLabel}
        </button>
    )
}

export default OrderActionButton