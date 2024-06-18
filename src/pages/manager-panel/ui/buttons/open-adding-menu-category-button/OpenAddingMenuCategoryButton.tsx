import React from 'react'
import { OpenAddingMenuCategoryButtonProps, OpenAddingPromocodeButtonProps } from 'src/pages/manager-panel/manager_panel.types'
import './open_adding_menu_category_button.css'

const OpenAddingMenuCategoryButton = ({onOpen} : OpenAddingMenuCategoryButtonProps) => {
    return (
        <button className="button__wrapper open__adding__menu__category__button" onClick={onOpen}>
            Add menu category
        </button>
    )
}

export default OpenAddingMenuCategoryButton