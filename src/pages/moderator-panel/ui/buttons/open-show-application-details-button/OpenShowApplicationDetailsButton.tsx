import React from 'react'
import { OpenShowApplicationDetailsButtonProps } from 'src/pages/moderator-panel/moderator_panel.types'
import './open_show_application_details_button.css'

const OpenShowApplicationDetailsButton = ({onOpen} : OpenShowApplicationDetailsButtonProps) => {
    return (
        <button className="button__wrapper open__show__application__details__button" onClick={onOpen}>
            Show details
        </button>
    )
}

export default OpenShowApplicationDetailsButton