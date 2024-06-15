import MenuItemsList from '../menu-items-list/MenuItemsList';
import { MenuCategoryProps } from '../menu_page.types';
import MenuCategoriesRefsContext from '../contexts/MenuCategoriesRefsContext';
import { InView } from 'react-intersection-observer';
import useCategoryRef from '../hooks/useCategoryRef';
import MenuCategoriesActiveContext from '../contexts/MenuCategoriesActiveContext';
import { useContext } from 'react';
import './menu_category.css'

const MenuCategory = ({ menuCategory, onMenuItemClick }: MenuCategoryProps) => {
    const categoryRef = useCategoryRef(menuCategory.id, MenuCategoriesRefsContext)
    const { setActiveCategoryId } = useContext(MenuCategoriesActiveContext)

    const onChange = (inView: boolean) => {
        if (inView){
            setActiveCategoryId(menuCategory.id)
            console.log('setted active category id from view: ', menuCategory.id)
        }
    }

    return (
        <div className="menu__category__container" ref={categoryRef}>
            <InView onChange={onChange} threshold={1} className="menu__category__view"></InView>
            <div className="menu__category__name">
                {menuCategory.name}
            </div>
            <MenuItemsList menuItems={menuCategory.items} categoryName={menuCategory.name} onMenuItemClick={onMenuItemClick} />
        </div>
    )
}

export default MenuCategory;