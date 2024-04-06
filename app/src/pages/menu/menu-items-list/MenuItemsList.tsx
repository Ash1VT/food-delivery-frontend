import MenuItem from '../menu-item/MenuItem'
import { MenuItemsListProps } from '../menu_page.types'
import './menu_items_list.css'

const MenuItemsList = ({menuItems} : MenuItemsListProps) => {
    return (
        <div className="menu__category__items__list">
            {menuItems.map((menuItem) => (
                    <MenuItem
                        {...menuItem}
                    />
                )
            )}
        </div>
    )
}

export default MenuItemsList