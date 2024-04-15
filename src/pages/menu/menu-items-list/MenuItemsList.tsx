import MenuItem from '../menu-item/MenuItem'
import { MenuItemsListProps } from '../menu_page.types'
import './menu_items_list.css'

const MenuItemsList = ({items} : MenuItemsListProps) => {
    return (
        <div className="menu__category__items__list">
            {items.map((item) => (
                    <MenuItem
                        key={item.id}
                        {...item}
                    />
                )
            )}
        </div>
    )
}

export default MenuItemsList