import Divider from 'src/components/ui/divider/Divider'
import { MenuCategoryNameProps } from '../menu_page.types'
import './menu_category_name.css'
import useActiveClick from 'src/hooks/useActiveClick'
import MenuCategoriesNamesClicksContext from '../contexts/MenuCategoriesNamesClicksContext'
import { useContext } from 'react'
import MenuCategoriesRefsContext from '../contexts/MenuCategoriesRefsContext'

const navbarHeight = 120;

const MenuCategoryName = ({id, name, imageUrl}: MenuCategoryNameProps) => {
    const { isClicked, setActive } = useActiveClick(id, MenuCategoriesNamesClicksContext)
    const { categories } = useContext(MenuCategoriesRefsContext)

    const onClick = () => {
        const category = categories.find((category) => category.id === id)
        const categoryComponent = category?.ref.current;

        const scrollToComponent = (component: HTMLElement) => {
            window.scrollTo({
                top: component.offsetTop - navbarHeight,
                behavior: 'smooth'
            })
        }

        if (categoryComponent) 
            scrollToComponent(categoryComponent)
        
        setActive()
    }

    return (
        <div className="menu__category__name__container">
            <div className={`menu__category__image__wrapper ${isClicked ? 'menu__category__image__active' : 'menu__category__image__not__active'}`} style={{ backgroundImage: `url(${imageUrl})` }} onClick={onClick}>
                <div className="menu__category__name__text">
                    {name}{id.toString()}
                </div>
            </div>
            {isClicked &&
                <Divider width='50px' height='2px' color='#ffb700'/>
            }
        </div>
    )
}

export default MenuCategoryName