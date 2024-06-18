import React from 'react'
import { FinishOrderDeliveryButtonProps } from 'src/pages/profile/profile.types'
import './finish_order_delivery_button.css'

const FinishOrderDeliveryButton = ({onClick} : FinishOrderDeliveryButtonProps) => {
    return (
        <button className="button__wrapper finish__order__delivery__button" onClick={onClick}>
            Finish delivery
        </button>
    )
}

export default FinishOrderDeliveryButton