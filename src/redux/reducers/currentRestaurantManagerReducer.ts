import { createSlice } from "@reduxjs/toolkit";
import IMenu from "../models/IMenu";
import IPromocode from "../models/IPromocode";

interface CurrentRestaurantManagerState {
    restaurantId?: string | undefined | null
    restaurantMenus: IMenu[]
    restaurantPromocodes: IPromocode[]
}

const initialState: CurrentRestaurantManagerState = {
    restaurantId: '1',
    restaurantMenus: [
        {
            id: '1',
            name: 'Summer Menu',
            description: 'Summer Menu',
            restaurantId: '1',
            menuCategories: [
                {
                    id: '1',
                    name: 'Pizzas',
                    imageUrl: 'images/pizza1.png',
                    items: [
                        {
                            id: '1',
                            imageUrl: 'images/food1.png',
                            name: 'Hamburger',
                            categoryName: 'Pizzas',
                            description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                            ratingValue: 4.5,
                            reviewsCount: 10,
                            price: 10,
                        },
                        {
                            id: '2',
                            imageUrl: 'images/food1.png',
                            name: 'Hamburger',
                            categoryName: 'Pizzas',
                            description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                            ratingValue: 4.5,
                            reviewsCount: 10,
                            price: 10,
                        },
                        {
                            id: '3',
                            imageUrl: 'images/food1.png',
                            name: 'Hamburger',
                            categoryName: 'Pizzas',
                            description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                            ratingValue: 4.5,
                            reviewsCount: 10,
                            price: 10,
                        },
                        {
                            id: '4',
                            imageUrl: 'images/food1.png',
                            name: 'Hamburger',
                            categoryName: 'Pizzas',
                            description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                            ratingValue: 4.5,
                            reviewsCount: 10,
                            price: 10,
                        },
                        {
                            id: '5',
                            imageUrl: 'images/food1.png',
                            name: 'Hamburger',
                            categoryName: 'Pizzas',
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
                    items: [
                        {
                            id: '6',
                            imageUrl: 'images/food1.png',
                            name: 'Hamburger',
                            categoryName: 'Appetizers',
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
                    items: [
                        {
                            id: '7',
                            imageUrl: 'images/food1.png',
                            name: 'Hamburger',
                            categoryName: 'Vaizers',
                            description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                            ratingValue: 4.5,
                            reviewsCount: 10,
                            price: 10,
                        }
                    ]
                },
                {
                    id: '4',
                    name: 'Vaizers',
                    imageUrl: 'images/pizza1.png',
                    items: [
                        {
                            id: '8',
                            imageUrl: 'images/food1.png',
                            name: 'Hamburger',
                            categoryName: 'Vaizers',
                            description: 'Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries Hamburger with cheese and fries',
                            ratingValue: 4.5,
                            reviewsCount: 10,
                            price: 10,
                        }
                    ]
                },
                
            ]   
        },
        {
            id: '2',
            name: 'Autumn Menu',
            description: 'Autumn Menu',
            restaurantId: '1',
            menuCategories: []
        },
        {
            id: '3',
            name: 'Autumn Menu',
            description: 'Autumn Menu',
            restaurantId: '1',
            menuCategories: []
        },
        {
            id: '4',
            name: 'Autumn Menu',
            description: 'Autumn Menu',
            restaurantId: '1',
            menuCategories: []
        },
        {
            id: '5',
            name: 'Autumn Menu',
            description: 'Autumn Menu',
            restaurantId: '1',
            menuCategories: []
        }
    ],
    restaurantPromocodes: [
        {
            id: '1',
            nameIdentifier: 'Test',
            discountPercentage: 10,
            validFrom: new Date(),
            validUntil: new Date(),
            maxUsageCount: 10,
            currentUsageCount: 0,
            isActive: true,
            restaurantId: '1'
        },
        {
            id: '2',
            nameIdentifier: 'Test',
            discountPercentage: 10,
            validFrom: new Date(),
            validUntil: new Date(),
            maxUsageCount: 10,
            currentUsageCount: 0,
            isActive: true,
            restaurantId: '1'
        }
    ]
}

const currentRestaurantManagerSlice = createSlice({
    name: 'currentRestaurantManager',
    initialState,
    reducers: {
       
    }
})

export default currentRestaurantManagerSlice.reducer;