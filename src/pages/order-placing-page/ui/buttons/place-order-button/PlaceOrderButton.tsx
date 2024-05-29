import React from 'react'
import { PlaceOrderButtonProps } from 'src/pages/order-placing-page/order_placing_page.types'
import './place_order_button.css'

const PlaceOrderButton = ({order, onOrderPlaced} : PlaceOrderButtonProps) => {

    const disabled = order.deliveryInformation.destinationAddress === undefined
    const buttonClassName = disabled ? 'button__wrapper place__order__button place__order__button__disabled' : 'button__wrapper place__order__button'

    return (
        <button className={buttonClassName} disabled={disabled} onClick={async () => await onOrderPlaced(order.id)}>
            Place Order
        </button>
    )
}

export default PlaceOrderButton