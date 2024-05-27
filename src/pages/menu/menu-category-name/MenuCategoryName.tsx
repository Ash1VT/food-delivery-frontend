import Divider from 'src/components/ui/divider/Divider'
import { MenuCategoryNameProps } from '../menu_page.types'
import { useContext } from 'react'
import MenuCategoriesRefsContext from '../contexts/MenuCategoriesRefsContext'
import scrollToCategory from '../utils/scrollToCategory'
import { menuSlice, setActiveCategory } from '../../../redux/reducers/menuReducer'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { getMenuCategory } from '../../../redux/selectors/menuSelectors'
import './menu_category_name.css'


const MenuCategoryName = ({id, name, imageUrl}: MenuCategoryNameProps) => {
    const { isActive } = useAppSelector(state => getMenuCategory(state, id))
    const dispatch = useAppDispatch()

    const { categoriesRefs } = useContext(MenuCategoriesRefsContext)

    const onClick = () => {
        scrollToCategory(id, categoriesRefs)
        dispatch(setActiveCategory(id))
    }

    return (
        <div className="menu__category__name__container">
            <div className={`menu__category__image__wrapper ${isActive ? 'menu__category__image__active' : 'menu__category__image__not__active'}`} style={{ backgroundImage: `url(${imageUrl})` }} onClick={onClick}>
                <div className="menu__category__name__text">
                    {name}{id.toString()}
                </div>
            </div>
            {isActive &&
                <Divider width='50px' height='2px' color='#ffb700'/>
            }
        </div>
    )
}

export default MenuCategoryName