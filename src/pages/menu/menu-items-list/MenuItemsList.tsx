import MenuItem from '../menu-item/MenuItem'
import { MenuItemsListProps } from '../menu_page.types'
import './menu_items_list.css'

const MenuItemsList = ({currentUser, menuItems, categoryName, onMenuItemClick} : MenuItemsListProps) => {
    return (
        <div className="menu__category__items__list">
            {menuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        currentUser={currentUser}
                        menuItem={item}
                        categoryName={categoryName}
                        onMenuItemClick={onMenuItemClick}
                    />
                )
            )}
        </div>
    )
}

export default MenuItemsList