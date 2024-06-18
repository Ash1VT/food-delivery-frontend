import React from 'react'
import { OpenAddingMenuItemButtonProps } from 'src/pages/manager-panel/manager_panel.types'
import './open_adding_menu_item_button.css'

const OpenAddingMenuItemButton = ({onOpen} : OpenAddingMenuItemButtonProps) => {
    return (
        <button className="button__wrapper open__adding__menu__item__button" onClick={onOpen}>
            Add menu item
        </button>
    )
}

export default OpenAddingMenuItemButton