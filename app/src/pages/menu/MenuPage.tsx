import Navbar from 'src/components/navbar'
import { FooterMenuColumnProps } from 'src/components/footer/footer.types'
import Footer from 'src/components/footer'
import { MenuCategoriesRefsContextProps, MenuCategoryNameProps, MenuCategoryProps, MenuCategoryRef } from './menu_page.types'
import MenuCategoriesNames from './menu-categories-names/MenuCategoriesNames'
import Divider from 'src/components/ui/divider/Divider'
import MenuCategoriesList from './menu-categories-list/MenuCategoriesList'
import MenuCategoriesRefsContext from './contexts/MenuCategoriesRefsContext'
import { useState } from 'react'
import OrderCart from 'src/components/order-cart/OrderCart'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { getMenuCategories, getMenu } from './redux/selectors'
import IMenuCategory from './redux/models/IMenuCategory'
import RestaurantReference from 'src/components/restaurant-reference/RestaurantReference'
import { getRestaurant } from '../restaurants/redux/selectors'
import './menu_page.css'

const MenuPage = () => {

    const { restaurantId, menuCategories } = useAppSelector(state => state.menuReducer.menu)
    
    const restaurant = useAppSelector(state => getRestaurant(state, restaurantId))

    const cities: string[] = [
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
    ]

    const menu_columns: FooterMenuColumnProps[] = [
        {
          title: 'Company',
          items: ['About us', 'Team', 'Careers', 'Blog']
        },
        {
          title: 'Contact',
          items: ['Help & Support', 'Partner with us', 'Ride with us']
        },
    ]

    const [categoriesRefs, setCategoriesRefs] = useState<MenuCategoryRef[]>([])


    const menuCategoriesRefsContext: MenuCategoriesRefsContextProps = {
        categoriesRefs: categoriesRefs,
        setCategoriesRefs: setCategoriesRefs
    }


    return (
        <div className="container menu__container">
            <Navbar/>
            <div className="menu__wrapper">
                    <MenuCategoriesRefsContext.Provider value={menuCategoriesRefsContext}>
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
                            <div className="menu__order__cart">
                                <OrderCart/>
                            </div>
                    </MenuCategoriesRefsContext.Provider>
            </div>
            <Footer cities={cities} cities_per_column={5} menu_columns={menu_columns} />
        </div>
    )
}

export default MenuPage