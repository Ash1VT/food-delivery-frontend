import React from 'react'
import { OpenShowAddressDetailsButtonProps } from 'src/pages/moderator-panel/moderator_panel.types'
import './open_show_address_details_button.css'

const OpenShowAddressDetailsButton = ({onOpen} : OpenShowAddressDetailsButtonProps) => {
    return (
        <button className="button__wrapper open__show__address__details__button" onClick={onOpen}>
            Show details
        </button>
    )
}

export default OpenShowAddressDetailsButton