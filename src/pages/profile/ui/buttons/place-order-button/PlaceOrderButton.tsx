import React from 'react'
import { PlaceOrderButtonProps } from 'src/pages/profile/profile.types'
import './place_order_button.css'

const PlaceOrderButton = ({onClick} : PlaceOrderButtonProps) => {
    return (
        <button className="button__wrapper profile__place__order__button" onClick={onClick}>
            Place Order
        </button>
    )
}

export default PlaceOrderButton