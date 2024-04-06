import { useContext, useEffect, useRef } from 'react';
import MenuItemsList from '../menu-items-list/MenuItemsList';
import { MenuCategoryProps } from '../menu_page.types';
import './menu_category.css'
import MenuCategoriesRefsContext from '../contexts/MenuCategoriesRefsContext';
import MenuCategoriesNamesClicksContext from '../contexts/MenuCategoriesNamesClicksContext';
import { InView } from 'react-intersection-observer';
import useSetActive from 'src/hooks/useSetActive';
import useCategoryRef from '../hooks/useCategoryRef';

const MenuCategory = ({ id, name, menuItems }: MenuCategoryProps) => {
    const setActive = useSetActive(id, MenuCategoriesNamesClicksContext)

    const categoryRef = useCategoryRef(id, MenuCategoriesRefsContext)

    const onChange = (inView: boolean) => {
        if (inView)
            setActive()
    }

    return (
        <div className="menu__category__container" ref={categoryRef}>
            <InView onChange={onChange} threshold={1} style={{ position: 'absolute', width: 100, minHeight: window.screen.height - 300 }}></InView>
            <div className="menu__category__name">
                {name}{id.toString()}
            </div>
            <MenuItemsList menuItems={menuItems} />
        </div>
    )
}

export default MenuCategory;