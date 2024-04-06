import { MenuCategoriesListProps } from '../menu_page.types'
import MenuCategory from '../menu-category/MenuCategory'
import MenuCategoriesRefsContext from '../contexts/MenuCategoriesRefsContext'
import './menu_categories_list.css'

const MenuCategoriesList = ({menuCategories} : MenuCategoriesListProps) => {

    return (
        <div className="menu__categories__list">
            {menuCategories.map((menuCategory) => (
                <MenuCategory
                    id={menuCategory.id}
                    name={menuCategory.name}
                    menuItems={menuCategory.menuItems}
                />
            ))}
        </div>
    )
}

export default MenuCategoriesList