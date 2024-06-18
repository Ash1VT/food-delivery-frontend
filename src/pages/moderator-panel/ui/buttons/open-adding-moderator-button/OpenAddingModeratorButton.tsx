import React from 'react'
import { OpenAddingModeratorButtonProps } from 'src/pages/moderator-panel/moderator_panel.types'
import './open_adding_moderator_button.css'

const OpenAddingModeratorButton = ({onOpen} : OpenAddingModeratorButtonProps) => {
    return (
        <button className="button__wrapper open__adding__moderator__button" onClick={onOpen}>
            Add moderator
        </button>
    )
}

export default OpenAddingModeratorButton