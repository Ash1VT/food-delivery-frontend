import Navbar from 'src/components/navbar'
import { FooterMenuColumnProps } from 'src/components/footer/footer.types'
import Footer from 'src/components/footer'
import { MenuCategoriesActiveContextProps, MenuCategoriesRefsContextProps, MenuCategoryNameProps, MenuCategoryProps, MenuCategoryRef } from './menu_page.types'
import MenuCategoriesNames from './menu-categories-names/MenuCategoriesNames'
import Divider from 'src/components/ui/divider/Divider'
import MenuCategoriesList from './menu-categories-list/MenuCategoriesList'
import MenuCategoriesRefsContext from './contexts/MenuCategoriesRefsContext'
import { useState } from 'react'
import OrderCart from 'src/components/order-cart/OrderCart'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import IMenuCategory from '../../redux/models/IMenuCategory'
import RestaurantReference from 'src/components/restaurant-reference/RestaurantReference'
import { getRestaurant } from '../../redux/selectors/restaurantSelectors'
import MenuCategoriesActiveContext from './contexts/MenuCategoriesActiveContext'
import { getMenu } from 'src/redux/selectors/menuSelectors'
import './menu_page.css'
import { getCurrentUser } from 'src/redux/selectors/currentUserSelectors'

const MenuPage = () => {
    const restaurantId = '1';
    const currentUser = useAppSelector(getCurrentUser)

    const menu = useAppSelector(state => getMenu(state, restaurantId))
    
    
    const restaurant = useAppSelector(state => getRestaurant(state, restaurantId))

    const [categoriesRefs, setCategoriesRefs] = useState<MenuCategoryRef[]>([])
    const [activeCategoryId, setActiveCategoryId] = useState<string>('1')
    
    if (!menu) {
        return <div>error</div>
    }

    const menuCategories = menu.menuCategories

    const menuCategoriesRefsContext: MenuCategoriesRefsContextProps = {
        categoriesRefs: categoriesRefs,
        setCategoriesRefs: setCategoriesRefs
    }

    const menuCategoriesActiveContext: MenuCategoriesActiveContextProps = {
        activeCategoryId: activeCategoryId,
        setActiveCategoryId: setActiveCategoryId
    }

    return (
        <div className="container menu__container">
            <Navbar currentUser={currentUser}/>
            <div className="menu__wrapper">
                    <MenuCategoriesRefsContext.Provider value={menuCategoriesRefsContext}>
                        <MenuCategoriesActiveContext.Provider value={menuCategoriesActiveContext}>
                            <div className="menu__left__wrapper">
                                {/* <div className="menu__back__to__restaurants__wrapper">

                                </div> */}
                                <MenuCategoriesNames categoryNames={menuCategories}/>
                            </div>
                            {/* <Divider width='2px' height='auto' color='#CFCFCF' className='menu__divider'/> */}
                            <div className="menu__content__wrapper">

                                {/* <div className="menu__restaurant__wrapper">

                                </div> */}
                                <RestaurantReference {...restaurant}/>
                                <MenuCategoriesList menuCategories={menuCategories}/>
                            </div>
                            {/* <div className="menu__order__cart">
                                <OrderCart/>
                            </div> */}
                        </MenuCategoriesActiveContext.Provider>
                    </MenuCategoriesRefsContext.Provider>
            </div>
            <Footer/>
        </div>
    )
}

export default MenuPage