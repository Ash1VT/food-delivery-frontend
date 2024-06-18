import React from 'react'
import { OpenEditingRestaurantInformationButtonProps } from 'src/pages/manager-panel/manager_panel.types'
import './open_editing_restaurant_information_button.css'

const OpenEditingRestaurantInformationButton = ({onOpen} : OpenEditingRestaurantInformationButtonProps) => {
    return (
        <button className="button__wrapper open__editing__restaurant__information__button" onClick={onOpen}>
            Edit Information
        </button>
    )
}

export default OpenEditingRestaurantInformationButton