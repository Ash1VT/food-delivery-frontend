import Navbar from 'src/components/navbar'
import { FooterMenuColumnProps } from 'src/components/footer/footer.types'
import Footer from 'src/components/footer'
import MenuItem from './menu-item/MenuItem'
import { MenuCategoriesRefsContextProps, MenuCategoryNameProps, MenuCategoryProps, MenuCategoryRef, MenuItemProps } from './menu_page.types'
import MenuItemsList from './menu-items-list/MenuItemsList'
import MenuCategory from './menu-category/MenuCategory'
import MenuCategoriesNames from './menu-categories-names/MenuCategoriesNames'
import './menu_page.css'
import Divider from 'src/components/ui/divider/Divider'
import MenuCategoriesList from './menu-categories-list/MenuCategoriesList'
import MenuCategoriesRefsContext from './contexts/MenuCategoriesRefsContext'
import { useRef, useState } from 'react'
import { ClickProps, ClicksContextProps } from 'src/hooks/useActiveClick'
import MenuCategoriesNamesClicksContext from './contexts/MenuCategoriesNamesClicksContext'
import OrderCart from 'src/components/order-cart/OrderCart'
import { OrderCartItemProps } from 'src/components/order-cart/order_cart.types'

const MenuPage = () => {

    const categoryNames: MenuCategoryNameProps[] = [
        {
            id: BigInt(1),
            name: 'Pizzas',
            imageUrl: 'images/pizza1.png',
            isActive: true
        },
        {
            id: BigInt(2),
            name: 'Appetizers',
            imageUrl: 'images/pizza1.png',
            isActive: false
        },
        {
            id: BigInt(3),
            name: 'Vaizers',
            imageUrl: 'images/pizza1.png',
            isActive: false
        },
        {
            id: BigInt(4),
            name: 'Vaizers',
            imageUrl: 'images/pizza1.png',
            isActive: false
        },
        {
            id: BigInt(5),
            name: 'Vaizers',
            imageUrl: 'images/pizza1.png',
            isActive: false
        },
        {
            id: BigInt(6),
            name: 'Vaizers',
            imageUrl: 'images/pizza1.png',
            isActive: false
        },
        {
            id: BigInt(7),
            name: 'Vaizers',
            imageUrl: 'images/pizza1.png',
            isActive: false
        },
        {
            id: BigInt(8),
            name: 'Vaizers',
            imageUrl: 'images/pizza1.png',
            isActive: false
        },
        {
            id: BigInt(9),
            name: 'Vaizers',
            imageUrl: 'images/pizza1.png',
            isActive: false
        },
    ]

    const menuCategories: MenuCategoryProps[] = [
        {
            id: BigInt(1),
            name: 'Pizzas',
            menuItems: [
                {
                    id: BigInt(1),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                },
                {
                    id: BigInt(1),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                },
                {
                    id: BigInt(1),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                },
                {
                    id: BigInt(1),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                },
                {
                    id: BigInt(1),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
        {
            id: BigInt(2),
            name: 'Appetizers',
            menuItems: [
                {
                    id: BigInt(2),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
        {
            id: BigInt(3),
            name: 'Vaizers',
            menuItems: [
                {
                    id: BigInt(3),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
        {
            id: BigInt(4),
            name: 'Vaizers',
            menuItems: [
                {
                    id: BigInt(3),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
        {
            id: BigInt(5),
            name: 'Vaizers',
            menuItems: [
                {
                    id: BigInt(3),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
        {
            id: BigInt(6),
            name: 'Vaizers',
            menuItems: [
                {
                    id: BigInt(3),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
        {
            id: BigInt(7),
            name: 'Vaizers',
            menuItems: [
                {
                    id: BigInt(3),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
        {
            id: BigInt(8),
            name: 'Vaizers',
            menuItems: [
                {
                    id: BigInt(3),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
        {
            id: BigInt(9),
            name: 'Vaizers',
            menuItems: [
                {
                    id: BigInt(3),
                    imageUrl: 'images/food1.png',
                    name: 'Hamburger',
                    description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                    ratingValue: 4.5,
                    reviewsCount: 10,
                    price: 10,
                    categoryId: BigInt(1)
                }
            ]
        },
  
    ]

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

    const orderCartItems: OrderCartItemProps[] = [
        {
            id: BigInt(1),
            imageUrl: 'images/food1.png',
            name: 'Hamburger',
            categoryName: 'Pizzas',
            price: 10,
            quantity: 1
        }
    ]
    
    const [activeCategoryId, setActiveCategoryId] = useState<bigint>(BigInt(1))
    const [clicks, setClicks] = useState<ClickProps[]>([])
    const [categories, setCategories] = useState<MenuCategoryRef[]>([])


    const menuCategoriesRefsContext: MenuCategoriesRefsContextProps = {
        categories,
        setCategories
    }

    const menuCategoryClicksContext: ClicksContextProps = {
        clicks,
        setClicks,
        activeItemId: activeCategoryId,
        setActiveItemId: setActiveCategoryId
    }

    return (
        <div className="container menu__container">
            <Navbar/>
            <div className="menu__wrapper">
                    <MenuCategoriesRefsContext.Provider value={menuCategoriesRefsContext}>
                        <MenuCategoriesNamesClicksContext.Provider value={menuCategoryClicksContext}>
                            <div className="menu__left__wrapper">
                                {/* <div className="menu__back__to__restaurants__wrapper">

                                </div> */}
                                <MenuCategoriesNames categoryNames={categoryNames}/>
                            </div>
                            <Divider width='2px' height='auto' color='#CFCFCF' className='menu__divider'/>
                            <div className="menu__content__wrapper">

                                {/* <div className="menu__restaurant__wrapper">

                                </div> */}
                                <MenuCategoriesList menuCategories={menuCategories}/>
                            </div>
                            <div className="menu__order__cart">
                                <OrderCart items={orderCartItems}/>
                            </div>
                        </MenuCategoriesNamesClicksContext.Provider>
                    </MenuCategoriesRefsContext.Provider>
            </div>
            <Footer cities={cities} cities_per_column={5} menu_columns={menu_columns} />
        </div>
    )
}

export default MenuPage