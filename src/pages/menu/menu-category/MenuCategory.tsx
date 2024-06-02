import MenuItemsList from '../menu-items-list/MenuItemsList';
import { MenuCategoryProps } from '../menu_page.types';
import MenuCategoriesRefsContext from '../contexts/MenuCategoriesRefsContext';
import { InView } from 'react-intersection-observer';
import useCategoryRef from '../hooks/useCategoryRef';
import MenuCategoriesActiveContext from '../contexts/MenuCategoriesActiveContext';
import { useContext } from 'react';
import './menu_category.css'

const MenuCategory = ({ id, name, items }: MenuCategoryProps) => {
    const categoryRef = useCategoryRef(id, MenuCategoriesRefsContext)
    const { setActiveCategoryId } = useContext(MenuCategoriesActiveContext)

    const onChange = (inView: boolean) => {
        if (inView){
            setActiveCategoryId(id)
            console.log('setted active category id from view: ', id)
        }
    }

    return (
        <div className="menu__category__container" ref={categoryRef}>
            <InView onChange={onChange} threshold={1} className="menu__category__view"></InView>
            <div className="menu__category__name">
                {name}
            </div>
            <MenuItemsList items={items} />
        </div>
    )
}

export default MenuCategory;