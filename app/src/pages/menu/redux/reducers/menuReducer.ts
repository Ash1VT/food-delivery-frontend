import { createSlice } from "@reduxjs/toolkit";
import IMenuCategory from "../models/IMenuCategory";
import IMenu from "../models/IMenu";

interface MenuState {
    menu: IMenu
}

const initialState: MenuState = {
    menu: {
        id: '1',
        name: 'Summer Menu',
        description: 'Summer Menu',
        restaurantId: '1',
        menuCategories: [
            {
                id: '1',
                name: 'Pizzas',
                imageUrl: 'images/pizza1.png',
                isActive: true,
                items: [
                    {
                        id: '1',
                        imageUrl: 'images/food1.png',
                        name: 'Hamburger',
                        description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                        ratingValue: 4.5,
                        reviewsCount: 10,
                        price: 10,
                    },
                    {
                        id: '2',
                        imageUrl: 'images/food1.png',
                        name: 'Hamburger',
                        description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                        ratingValue: 4.5,
                        reviewsCount: 10,
                        price: 10,
                    },
                    {
                        id: '3',
                        imageUrl: 'images/food1.png',
                        name: 'Hamburger',
                        description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                        ratingValue: 4.5,
                        reviewsCount: 10,
                        price: 10,
                    },
                    {
                        id: '4',
                        imageUrl: 'images/food1.png',
                        name: 'Hamburger',
                        description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                        ratingValue: 4.5,
                        reviewsCount: 10,
                        price: 10,
                    },
                    {
                        id: '5',
                        imageUrl: 'images/food1.png',
                        name: 'Hamburger',
                        description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                        ratingValue: 4.5,
                        reviewsCount: 10,
                        price: 10,
                    }
                ]
            },
            {
                id: '2',
                name: 'Appetizers',
                imageUrl: 'images/pizza1.png',
                isActive: false,
                items: [
                    {
                        id: '6',
                        imageUrl: 'images/food1.png',
                        name: 'Hamburger',
                        description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                        ratingValue: 4.5,
                        reviewsCount: 10,
                        price: 10,
                    }
                ]
            },
            {
                id: '3',
                name: 'Vaizers',
                imageUrl: 'images/pizza1.png',
                isActive: false,
                items: [
                    {
                        id: '7',
                        imageUrl: 'images/food1.png',
                        name: 'Hamburger',
                        description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                        ratingValue: 4.5,
                        reviewsCount: 10,
                        price: 10,
                    }
                ]
            }
        ]   
    }
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.menu.menuCategories.map((menuCategory) => {
                if (menuCategory.id === action.payload) {
                    menuCategory.isActive = true
                } else {
                    menuCategory.isActive = false
                }
            })
        }
    }
})

export default menuSlice.reducer;
export const { setActiveCategory } = menuSlice.actions