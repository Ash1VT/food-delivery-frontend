import React from 'react'
import { OpenOrderCartButtonProps } from 'src/components/navbar/navbar.types'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './open_order_cart_button.css'

const OpenOrderCartButton = ({onClick} : OpenOrderCartButtonProps) => {
    return (
        <button className="button__wrapper open__order__cart__button" onClick={onClick}>
            <ShoppingCartIcon className="button__icon open__order__cart__button__icon" viewBox='8 2 8 20'/>
        </button>
    )
}

export default OpenOrderCartButton