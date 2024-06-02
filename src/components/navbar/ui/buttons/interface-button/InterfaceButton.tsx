import React from 'react'
import { InterfaceButtonProps } from 'src/components/navbar/navbar.types'
import './interface_button.css'

const InterfaceButton = ({label, onClick} : InterfaceButtonProps) => {
    return (
        <button className="button__wrapper interface__button" onClick={onClick}>
            {label}
        </button>
    )
}

export default InterfaceButton