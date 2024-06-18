import React from 'react'
import { CurrentRestaurantMenuSelectorProps } from '../manager_panel.types'
import './current_restaurant_menu_selector.css'

const CurrentRestaurantMenuSelector = ({activeMenuId, menus, onCurrentMenuSelected} : CurrentRestaurantMenuSelectorProps) => {
    const handleSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const menuId = event.target.value
        await onCurrentMenuSelected(menuId)
    }

    return (
        <div className="current__restaurant__menu__selector__container">
            <label className="current__restaurant__menu__selector__label">Current restaurant menu</label>
            <select
                className="current__restaurant__menu__selector__dropdown"
                onChange={handleSelect} value={activeMenuId ?? ''}>
                    <option className="current__restaurant__menu__selector__option current__restaurant__menu__selector__option__no__current" value="">No current menu</option>
                    {menus.map((menu) => (
                        <option className="current__restaurant__menu__selector__option" key={menu.id} value={menu.id}>
                            {menu.name}
                        </option>
                    ))}
            </select>
      </div>
    )
}

export default CurrentRestaurantMenuSelector