import Navbar from 'src/components/navbar'
import { FooterMenuColumnProps } from 'src/components/footer/footer.types'
import Footer from 'src/components/footer'
import { MenuCategoriesActiveContextProps, MenuCategoriesRefsContextProps, MenuCategoryNameProps, MenuCategoryProps, MenuCategoryRef } from './menu_page.types'
import MenuCategoriesNames from './menu-categories-names/MenuCategoriesNames'
import Divider from 'src/components/ui/divider/Divider'
import MenuCategoriesList from './menu-categories-list/MenuCategoriesList'
import MenuCategoriesRefsContext from './contexts/MenuCategoriesRefsContext'
import { useEffect, useState } from 'react'
import OrderCart from 'src/components/order-cart/OrderCart'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import RestaurantReference from 'src/components/restaurant-reference/RestaurantReference'
import MenuCategoriesActiveContext from './contexts/MenuCategoriesActiveContext'
import { useNavigate, useParams } from 'react-router-dom'
import NotFoundPage from '../not-found-page/NotFoundPage'
import './menu_page.css'
import isRestaurantOpen from 'src/utils/isRestaurantOpen'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { fetchRestaurant, fetchRestaurantMenu } from 'src/redux/actions/restaurantMenu.actions'
import { addErrorNotification } from 'src/utils/notifications'
import BackToRestaurantsButton from './ui/buttons/back-to-restaurants-button/BackToRestaurantsButton'

const MenuPage = () => {
    const { restaurantId } = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const { isLoading: isMenuLoading, restaurant, menu, error: menuError } = useAppSelector((state) => state.restaurantMenuReducer)

    // const menu = useAppSelector(state => getMenu(state, restaurantId))
    // const restaurant = useAppSelector(state => getRestaurant(state, restaurantId))
    // const isRestaurantOpen = useAppSelector((state) => getRestaurantIsOpen(state, restaurantId))

    const [categoriesRefs, setCategoriesRefs] = useState<MenuCategoryRef[]>([])
    const [activeCategoryId, setActiveCategoryId] = useState<string>('1')
    
    useEffect(() => {
        if (restaurantId) {
            dispatch(fetchRestaurant(restaurantId)).then((response) => {

                if (response.type === 'restaurantMenu/fetchRestaurant/fulfilled') {
                    return
                }

                if (response.type === 'restaurantMenu/fetchRestaurant/rejected') {
                    addErrorNotification(response.payload as string)
                }

            }) 

            dispatch(fetchRestaurantMenu(restaurantId)).then((response) => {
                if (response.type === 'restaurantMenu/fetchRestaurantMenu/fulfilled') {
                    return
                }

                if (response.type === 'restaurantMenu/fetchRestaurantMenu/rejected') {
                    addErrorNotification(response.payload as string)
                }
            })
            
        }
    }, [dispatch])

    if (!restaurant) {
        return <NotFoundPage/>
    }

    const isOpen = isRestaurantOpen(restaurant)

    const handleMenuItemClick = (menuItemId: string) => {
        navigate(`/restaurants/${restaurantId}/items/${menuItemId}`)
    }

    const handleBackToRestaurantsClick = () => {
        navigate(`/restaurants`)
    }

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
                                <div className="menu__back__to__restaurants__wrapper">
                                    <BackToRestaurantsButton onBackToRestaurants={handleBackToRestaurantsClick} />
                                </div>
                                {menu &&
                                    <MenuCategoriesNames categoryNames={menu.menuCategories}/>
                                }
                            </div>
                            <div className="menu__content__wrapper">
                                <RestaurantReference isRestaurantOpen={isOpen} restaurant={restaurant}/>
                                {menu ? 
                                    (
                                        <MenuCategoriesList menuCategories={menu.menuCategories} onMenuItemClick={handleMenuItemClick}/>
                                    )
                                    : 
                                    (
                                        <div className='menu__not__available'>
                                            Restaurant menu is not available
                                        </div>
                                    )
                                }
                            </div>
                        </MenuCategoriesActiveContext.Provider>
                    </MenuCategoriesRefsContext.Provider>
            </div>
            <Footer/>
        </div>
    )
}

export default MenuPage