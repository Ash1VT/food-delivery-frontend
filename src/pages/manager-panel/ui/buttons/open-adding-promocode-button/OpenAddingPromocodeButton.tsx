import React from 'react'
import { OpenAddingPromocodeButtonProps } from 'src/pages/manager-panel/manager_panel.types'
import './open_adding_promocode_button.css'

const OpenAddingPromocodeButton = ({onOpen} : OpenAddingPromocodeButtonProps) => {
    return (
        <button className="button__wrapper open__adding__promocode__button" onClick={onOpen}>
            Add promocode
        </button>
    )
}

export default OpenAddingPromocodeButton