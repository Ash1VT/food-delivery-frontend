import { createSlice } from "@reduxjs/toolkit";
import IMenu from "../models/IMenu";
import IPromocode from "../models/IPromocode";
import IOrder from "../models/IOrder";

interface CurrentRestaurantManagerState {
    restaurantId?: string | undefined | null
    restaurantMenus: IMenu[]
    restaurantPromocodes: IPromocode[]
    restaurantOrders: IOrder[]
}

const initialState: CurrentRestaurantManagerState = {
    restaurantId: '1',
    restaurantMenus: [
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
                    "imageUrl": "https://www.southernliving.com/thmb/-_Rri5vav4ttiNj2arDaRNzvG-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27496_MkitEasy_DIGI_44_preview_scale_100_ppi_150_quality_100-cc4c5cc90b124650806f5baa603a4d42.jpg",
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
        },
        {

            "id": "2",
            "name": "Autumn Menu",
            "description": "Experience the flavors of autumn with our seasonal delights!",
            "restaurantId": "1",
            "menuCategories": [
                {
                    "id": "1",
                    "name": "Soups",
                    "imageUrl": "https://food.unl.edu/newsletters/images/vegetable-soup-with-pasta.png",
                    "items": [
                        {
                            "id": "11",
                            "imageUrl": "https://img.taste.com.au/cQQtIoEO/taste/2016/11/pumpkin-soup-with-a-twist-71237-1.jpeg",
                            "name": "Pumpkin Soup",
                            "categoryName": "Soups",
                            "description": "Creamy pumpkin soup garnished with roasted pumpkin seeds and a hint of nutmeg.",
                            "ratingValue": 4.7,
                            "reviewsCount": 130,
                            "price": 8
                        },
                        {
                            "id": "12",
                            "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/butternut-squash-soup-index-64e77ca00fd43.jpg?crop=0.8891738805172599xw:1xh;center,top&resize=1200:*",
                            "name": "Butternut Squash Soup",
                            "categoryName": "Soups",
                            "description": "Rich and velvety butternut squash soup with a touch of cinnamon and cream.",
                            "ratingValue": 4.6,
                            "reviewsCount": 120,
                            "price": 7
                        },
                        {
                            "id": "13",
                            "imageUrl": "https://www.grocery.coop/sites/default/files/wp-content/uploads/2010/11/Butternut_Apple_Soup_with_Ginger_1.jpg",
                            "name": "Apple Soup",
                            "categoryName": "Soups",
                            "description": "Sweet and savory apple soup infused with warm spices and topped with crispy bacon bits.",
                            "ratingValue": 4.5,
                            "reviewsCount": 110,
                            "price": 9
                        }
                    ]
                }
            ]
        }
    ],
    restaurantPromocodes: [
        {
            "id": "1",
            "nameIdentifier": "SUMMER10",
            "discountPercentage": 15,
            "validFrom": new Date("2024-06-01T00:00:00Z"),
            "validUntil": new Date("2024-06-30T23:59:59Z"),
            "maxUsageCount": 100,
            "currentUsageCount": 0,
            "isActive": true,
            "restaurantId": "1"
        },
        {
            "id": "2",
            "nameIdentifier": "FALL15",
            "discountPercentage": 20,
            "validFrom": new Date("2024-09-01T00:00:00Z"),
            "validUntil": new Date("2024-09-30T23:59:59Z"),
            "maxUsageCount": 200,
            "currentUsageCount": 0,
            "isActive": true,
            "restaurantId": "1"
        }
    ],
    restaurantOrders: [
        {
            "id": "1",
            "customerId": "1",
            "restaurantId": "1",
            "status": "preparing",
            "createdAt": new Date("2024-06-01T12:00:00Z"),
            "items": [
                {
                    "id": "1",
                    "menuItemName": "Margherita Pizza",
                    "menuItemCategoryName": "Pizza",
                    "menuItemPrice": 12,
                    "menuItemImageUrl": "https://example.com/images/margherita_pizza.jpg",
                    "quantity": 1
                }
            ],
            "deliveryInformation": {
                "id": "1",
                "originAddress": "123 Main St, Springfield, IL"
            },
            "priceInformation": {
                "id": "1",
                "orderItemsPrice": 12,
                "promocodeName": "WELCOME10",
                "promocodeDiscount": 2,
                "decountedItemsPrice": 10,
                "deliveryPrice": 5,
                "totalPrice": 15
            },
            "customer": {
                "id": "1",
                "imageUrl": "https://example.com/images/customers/john_doe.jpg",
                "firstName": "John",
                "lastName": "Doe",
                "fullName": "John Doe",
                "phone": "+11234567890",
                "birthDate": new Date("1990-01-01"),
                "isActive": true,
                "isEmailVerified": true,
                "email": "john.doe@example.com",
                "role": "customer"
            },
            "restaurant": {
                "id": "1",
                "imageUrl": "https://example.com/images/restaurants/italian_bistro.jpg",
                "name": "Italian Bistro",
                "address": "123 Main St, Springfield, IL",
                "phone": "+11234567890",
                "email": "info@italianbistro.com",
                "description": "Authentic Italian cuisine.",
                "ratingValue": 4.5,
                "reviewsCount": 150,
                "isActive": true,
                "workingHours": [
                    {
                        "id": "1",
                        "dayOfWeek": "monday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "2",
                        "dayOfWeek": "tuesday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "3",
                        "dayOfWeek": "wednesday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "4",
                        "dayOfWeek": "thursday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "5",
                        "dayOfWeek": "friday",
                        "openingTime": "11:00",
                        "closingTime": "23:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "6",
                        "dayOfWeek": "saturday",
                        "openingTime": "11:00",
                        "closingTime": "23:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "7",
                        "dayOfWeek": "sunday",
                        "openingTime": "11:00",
                        "closingTime": "21:00",
                        "restaurantId": "1"
                    }
                ]
            }
        },
        {
            "id": "2",
            "customerId": "2",
            "restaurantId": "1",
            "status": "pending",
            "createdAt": new Date("2024-06-01T12:00:00Z"),
            "items": [
                {
                    "id": "1",
                    "menuItemName": "Margherita Pizza",
                    "menuItemCategoryName": "Pizza",
                    "menuItemPrice": 12,
                    "menuItemImageUrl": "https://example.com/images/margherita_pizza.jpg",
                    "quantity": 1
                }
            ],
            "deliveryInformation": {
                "id": "1",
                "originAddress": "123 Main St, Springfield, IL"
            },
            "priceInformation": {
                "id": "1",
                "orderItemsPrice": 12,
                "promocodeName": "WELCOME10",
                "promocodeDiscount": 2,
                "decountedItemsPrice": 10,
                "deliveryPrice": 5,
                "totalPrice": 15
            },
            "customer": {
                "id": "1",
                "imageUrl": "https://example.com/images/customers/john_doe.jpg",
                "firstName": "John",
                "lastName": "Doe",
                "fullName": "John Doe",
                "phone": "+11234567890",
                "birthDate": new Date("1990-01-01"),
                "isActive": true,
                "isEmailVerified": true,
                "email": "john.doe@example.com",
                "role": "customer"
            },
            "restaurant": {
                "id": "1",
                "imageUrl": "https://example.com/images/restaurants/italian_bistro.jpg",
                "name": "Italian Bistro",
                "address": "123 Main St, Springfield, IL",
                "phone": "+11234567890",
                "email": "info@italianbistro.com",
                "description": "Authentic Italian cuisine.",
                "ratingValue": 4.5,
                "reviewsCount": 150,
                "isActive": true,
                "workingHours": [
                    {
                        "id": "1",
                        "dayOfWeek": "monday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "2",
                        "dayOfWeek": "tuesday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "3",
                        "dayOfWeek": "wednesday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "4",
                        "dayOfWeek": "thursday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "5",
                        "dayOfWeek": "friday",
                        "openingTime": "11:00",
                        "closingTime": "23:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "6",
                        "dayOfWeek": "saturday",
                        "openingTime": "11:00",
                        "closingTime": "23:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "7",
                        "dayOfWeek": "sunday",
                        "openingTime": "11:00",
                        "closingTime": "21:00",
                        "restaurantId": "1"
                    }
                ]
            }
        },
        {
            "id": "3",
            "customerId": "1",
            "restaurantId": "1",
            "status": "finished",
            "createdAt": new Date("2024-06-01T12:00:00Z"),
            "items": [
                {
                    "id": "1",
                    "menuItemName": "Margherita Pizza",
                    "menuItemCategoryName": "Pizza",
                    "menuItemPrice": 12,
                    "menuItemImageUrl": "https://example.com/images/margherita_pizza.jpg",
                    "quantity": 1
                }
            ],
            "deliveryInformation": {
                "id": "1",
                "originAddress": "123 Main St, Springfield, IL"
            },
            "priceInformation": {
                "id": "1",
                "orderItemsPrice": 12,
                "promocodeName": "WELCOME10",
                "promocodeDiscount": 2,
                "decountedItemsPrice": 10,
                "deliveryPrice": 5,
                "totalPrice": 15
            },
            "customer": {
                "id": "1",
                "imageUrl": "https://example.com/images/customers/john_doe.jpg",
                "firstName": "John",
                "lastName": "Doe",
                "fullName": "John Doe",
                "phone": "+11234567890",
                "birthDate": new Date("1990-01-01"),
                "isActive": true,
                "isEmailVerified": true,
                "email": "john.doe@example.com",
                "role": "customer"
            },
            "restaurant": {
                "id": "1",
                "imageUrl": "https://example.com/images/restaurants/italian_bistro.jpg",
                "name": "Italian Bistro",
                "address": "123 Main St, Springfield, IL",
                "phone": "+11234567890",
                "email": "info@italianbistro.com",
                "description": "Authentic Italian cuisine.",
                "ratingValue": 4.5,
                "reviewsCount": 150,
                "isActive": true,
                "workingHours": [
                    {
                        "id": "1",
                        "dayOfWeek": "monday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "2",
                        "dayOfWeek": "tuesday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "3",
                        "dayOfWeek": "wednesday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "4",
                        "dayOfWeek": "thursday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "5",
                        "dayOfWeek": "friday",
                        "openingTime": "11:00",
                        "closingTime": "23:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "6",
                        "dayOfWeek": "saturday",
                        "openingTime": "11:00",
                        "closingTime": "23:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "7",
                        "dayOfWeek": "sunday",
                        "openingTime": "11:00",
                        "closingTime": "21:00",
                        "restaurantId": "1"
                    }
                ]
            }
        },
        {
            "id": "5",
            "customerId": "1",
            "restaurantId": "1",
            "status": "preparing",
            "createdAt": new Date("2024-06-01T12:00:00Z"),
            "items": [
                {
                    "id": "1",
                    "menuItemName": "Margherita Pizza",
                    "menuItemCategoryName": "Pizza",
                    "menuItemPrice": 12,
                    "menuItemImageUrl": "https://example.com/images/margherita_pizza.jpg",
                    "quantity": 1
                }
            ],
            "deliveryInformation": {
                "id": "1",
                "originAddress": "123 Main St, Springfield, IL"
            },
            "priceInformation": {
                "id": "1",
                "orderItemsPrice": 12,
                "promocodeName": "WELCOME10",
                "promocodeDiscount": 2,
                "decountedItemsPrice": 10,
                "deliveryPrice": 5,
                "totalPrice": 15
            },
            "customer": {
                "id": "1",
                "imageUrl": "https://example.com/images/customers/john_doe.jpg",
                "firstName": "John",
                "lastName": "Doe",
                "fullName": "John Doe",
                "phone": "+11234567890",
                "birthDate": new Date("1990-01-01"),
                "isActive": true,
                "isEmailVerified": true,
                "email": "john.doe@example.com",
                "role": "customer"
            },
            "restaurant": {
                "id": "1",
                "imageUrl": "https://example.com/images/restaurants/italian_bistro.jpg",
                "name": "Italian Bistro",
                "address": "123 Main St, Springfield, IL",
                "phone": "+11234567890",
                "email": "info@italianbistro.com",
                "description": "Authentic Italian cuisine.",
                "ratingValue": 4.5,
                "reviewsCount": 150,
                "isActive": true,
                "workingHours": [
                    {
                        "id": "1",
                        "dayOfWeek": "monday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "2",
                        "dayOfWeek": "tuesday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "3",
                        "dayOfWeek": "wednesday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "4",
                        "dayOfWeek": "thursday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "5",
                        "dayOfWeek": "friday",
                        "openingTime": "11:00",
                        "closingTime": "23:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "6",
                        "dayOfWeek": "saturday",
                        "openingTime": "11:00",
                        "closingTime": "23:00",
                        "restaurantId": "1"
                    },
                    {
                        "id": "7",
                        "dayOfWeek": "sunday",
                        "openingTime": "11:00",
                        "closingTime": "21:00",
                        "restaurantId": "1"
                    }
                ]
            }
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