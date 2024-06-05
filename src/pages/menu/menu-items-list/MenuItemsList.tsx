import MenuItem from '../menu-item/MenuItem'
import { MenuItemsListProps } from '../menu_page.types'
import './menu_items_list.css'

const MenuItemsList = ({menuItems, onMenuItemClick} : MenuItemsListProps) => {
    return (
        <div className="menu__category__items__list">
            {menuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        menuItem={item}
                        onMenuItemClick={onMenuItemClick}
                    />
                )
            )}
        </div>
    )
}

export default MenuItemsList