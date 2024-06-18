import Divider from 'src/components/ui/divider/Divider'
import { MenuCategoryNameProps } from '../menu_page.types'
import { useContext } from 'react'
import MenuCategoriesRefsContext from '../contexts/MenuCategoriesRefsContext'
import scrollToCategory from '../utils/scrollToCategory'
import MenuCategoriesActiveContext from '../contexts/MenuCategoriesActiveContext'
import './menu_category_name.css'


const MenuCategoryName = ({id, name, imageUrl}: MenuCategoryNameProps) => {

    const { categoriesRefs } = useContext(MenuCategoriesRefsContext)
    const { activeCategoryId, setActiveCategoryId } = useContext(MenuCategoriesActiveContext)

    const isActive = id === activeCategoryId

    const onClick = () => {
        scrollToCategory(id, categoriesRefs)
        setActiveCategoryId(id)
        console.log('setted active category id from click: ', id)
    }
    console.log(imageUrl)
    return (
        <div className="menu__category__name__container">
            <div className={`menu__category__image__wrapper ${isActive ? 'menu__category__image__active' : 'menu__category__image__not__active'}`} style={{ backgroundImage: `url(${imageUrl})` }} onClick={onClick}>
                <div className="menu__category__name__gradient"/>
                <div className="menu__category__name__text">
                    {name}
                </div>
            </div>
            {isActive &&
                <Divider width='50px' height='2px' color='#ffb700'/>
            }
        </div>
    )
}

export default MenuCategoryName