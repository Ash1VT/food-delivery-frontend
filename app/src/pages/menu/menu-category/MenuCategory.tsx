import MenuItemsList from '../menu-items-list/MenuItemsList';
import { MenuCategoryProps } from '../menu_page.types';
import MenuCategoriesRefsContext from '../contexts/MenuCategoriesRefsContext';
import { InView } from 'react-intersection-observer';
import useCategoryRef from '../hooks/useCategoryRef';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';
import { setActiveCategory } from '../redux/reducers/menuReducer';
import './menu_category.css'

const MenuCategory = ({ id, name, items }: MenuCategoryProps) => {
    const dispatch = useAppDispatch()

    const categoryRef = useCategoryRef(id, MenuCategoriesRefsContext)

    const onChange = (inView: boolean) => {
        if (inView)
            dispatch(setActiveCategory(id))
    }

    return (
        <div className="menu__category__container" ref={categoryRef}>
            <InView onChange={onChange} threshold={1} style={{ position: 'absolute', width: 100, minHeight: window.screen.height - 300 }}></InView>
            <div className="menu__category__name">
                {name}{id.toString()}
            </div>
            <MenuItemsList items={items} />
        </div>
    )
}

export default MenuCategory;