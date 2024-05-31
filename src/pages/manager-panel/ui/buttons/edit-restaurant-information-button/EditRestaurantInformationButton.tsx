import React from 'react'
import './edit_restaurant_information_button.css'
import { EditRestaurantInformationButtonProps } from 'src/pages/manager-panel/manager_panel.types'

const EditRestaurantInformationButton = ({onEdit} : EditRestaurantInformationButtonProps) => {
    return (
        <button className="button__wrapper edit__restaurant__information__button" onClick={onEdit}>
            Edit Information
        </button>
    )
}

export default EditRestaurantInformationButton