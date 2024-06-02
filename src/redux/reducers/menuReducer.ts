import { createSlice } from "@reduxjs/toolkit";
import IMenuCategory from "../models/IMenuCategory";
import IMenu from "../models/IMenu";

interface MenuState {
    currentRestaurantsMenus: IMenu[]
}

const initialState: MenuState = {
    currentRestaurantsMenus: [
        {
            "id": "1",
            "name": "Summer Menu",
            "description": "Indulge in our delightful summer offerings!",
            "restaurantId": "1",
            "menuCategories": [
                {
                    "id": "1",
                    "name": "Pizzas",
                    "imageUrl": "images/pizza1.png",
                    "items": [
                        {
                            "id": "1",
                            "imageUrl": "https://foodbyjonister.com/wp-content/uploads/2020/01/MargheritaPizza.jpg",
                            "name": "Margherita Pizza",
                            "categoryName": "Pizzas",
                            "description": "Classic Margherita pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
                            "ratingValue": 4.5,
                            "reviewsCount": 120,
                            "price": 12
                        },
                        {
                            "id": "2",
                            "imageUrl": "https://againstthegraingourmet.com/cdn/shop/products/Pepperoni_Pizza_Beauty_300x.jpg?v=1658703726",
                            "name": "Pepperoni Pizza",
                            "categoryName": "Pizzas",
                            "description": "Delicious pepperoni pizza topped with spicy pepperoni slices and melted cheese.",
                            "ratingValue": 4.7,
                            "reviewsCount": 150,
                            "price": 15
                        },
                        {
                            "id": "3",
                            "imageUrl": "https://img.kidspot.com.au/52lezcwU/w643-h428-cfill-q90/kk/2015/03/hawaiian-pizza-recipe-605894-2.jpg",
                            "name": "Hawaiian Pizza",
                            "categoryName": "Pizzas",
                            "description": "Tropical Hawaiian pizza featuring ham, pineapple, and melted cheese.",
                            "ratingValue": 4.3,
                            "reviewsCount": 100,
                            "price": 14
                        },
                        {
                            "id": "4",
                            "imageUrl": "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1",
                            "name": "Veggie Pizza",
                            "categoryName": "Pizzas",
                            "description": "Vegetarian delight with assorted vegetables and gooey cheese.",
                            "ratingValue": 4.6,
                            "reviewsCount": 110,
                            "price": 13
                        },
                        {
                            "id": "5",
                            "imageUrl": "https://www.allrecipes.com/thmb/ee0daLeNNIUcrKbm5nxwFXheMDM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
                            "name": "Chicken Pizza",
                            "categoryName": "Pizzas",
                            "description": "Savoury chicken pizza with tender chicken pieces and a blend of spices.",
                            "ratingValue": 4.4,
                            "reviewsCount": 90,
                            "price": 16
                        }
                    ]
                },
                {
                    "id": "2",
                    "name": "Appetizers",
                    "imageUrl": "https://www.rachelcooks.com/wp-content/uploads/2016/03/spring-herb-cream-cheese-appetizer-cups-600-3-of-4.jpg",
                    "items": [
                        {
                            "id": "6",
                            "imageUrl": "https://img.taste.com.au/ol2Jq8ZQ/taste/2016/11/rachel-87711-2.jpeg",
                            "name": "French Fries",
                            "categoryName": "Appetizers",
                            "description": "Crispy golden fries served with ketchup or mayo.",
                            "ratingValue": 4.4,
                            "reviewsCount": 90,
                            "price": 6
                        },
                        {
                            "id": "7",
                            "imageUrl": "https://www.simplyrecipes.com/thmb/cMe-79ggQu91WIWwmbpPnyAmPVs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Air-Fryer-Onion-Rings-LEAD-4-db00f8b94db848f9b502f7d24f06935f.jpg",
                            "name": "Onion Rings",
                            "categoryName": "Appetizers",
                            "description": "Crunchy battered onion rings served with a tangy dipping sauce.",
                            "ratingValue": 4.5,
                            "reviewsCount": 100,
                            "price": 8
                        },
                        {
                            "id": "8",
                            "imageUrl": "https://www.grandecheese.com/wp-content/uploads/2021/01/Mozzarella-Sticks.jpg",
                            "name": "Mozzarella Sticks",
                            "categoryName": "Appetizers",
                            "description": "Melt-in-your-mouth mozzarella sticks with a crispy golden coating.",
                            "ratingValue": 4.3,
                            "reviewsCount": 80,
                            "price": 9
                        },
                        {
                            "id": "9",
                            "imageUrl": "https://richanddelish.com/wp-content/uploads/2023/01/Bruschetta-recipe-with-mozzarella-2.jpg",
                            "name": "Bruschetta",
                            "categoryName": "Appetizers",
                            "description": "Traditional Italian bruschetta topped with fresh tomatoes, basil, and garlic.",
                            "ratingValue": 4.6,
                            "reviewsCount": 110,
                            "price": 7
                        },
                        {
                            "id": "10",
                            "imageUrl": "https://fullofplants.com/wp-content/uploads/2023/05/crispy-air-fryer-garlic-bread-delicious-quick-appetizer-vegan-thumb.jpg",
                            "name": "Garlic Bread",
                            "categoryName": "Appetizers",
                            "description": "Warm, crispy garlic bread brushed with garlic butter and herbs.",
                            "ratingValue": 4.2,
                            "reviewsCount": 70,
                            "price": 5
                        }
                    ]
                }
            ]
        }
    ]
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        // setActiveCategory(state, action) {
        //     state.menu.menuCategories.map((menuCategory) => {
        //         if (menuCategory.id === action.payload) {
        //             menuCategory.isActive = true
        //         } else {
        //             menuCategory.isActive = false
        //         }
        //     })
        // }
    }
})

export default menuSlice.reducer;
// export const { setActiveCategory } = menuSlice.actions