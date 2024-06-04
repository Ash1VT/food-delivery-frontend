import { createSlice } from "@reduxjs/toolkit";
import IOrder from "../models/IOrder";
import IOrderReview from "../models/IOrderReview";

interface CurrentCourierState {
    availableOrders: IOrder[]
    currentCourierOrders: IOrder[]
    currentCourierRating: number
    currentCourierReviewsCount: number
    currentCourierReviews: IOrderReview[]

}

const initialState: CurrentCourierState = {
    currentCourierRating: 0,
    currentCourierReviewsCount: 0,
    currentCourierReviews: [],
    availableOrders: [
        {
            "id": "1",
            "customerId": "1",
            "restaurantId": "1",
            "status": "ready",
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
            "restaurant":  {
                "id": "1",
                "imageUrl": "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
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
            "restaurantId": "2",
            "status": "ready",
            "createdAt": new Date("2024-06-01T13:00:00Z"),
            "items": [
                {
                    "id": "1",
                    "menuItemName": "Cheeseburger",
                    "menuItemCategoryName": "Burgers",
                    "menuItemPrice": 8,
                    "menuItemImageUrl": "https://example.com/images/cheeseburger.jpg",
                    "quantity": 2
                }
            ],
            "deliveryInformation": {
                "id": "2",
                "originAddress": "456 Elm St, Springfield, IL"
            },
            "priceInformation": {
                "id": "2",
                "orderItemsPrice": 16,
                "promocodeName": "SAVE5",
                "promocodeDiscount": 5,
                "decountedItemsPrice": 11,
                "deliveryPrice": 3,
                "totalPrice": 14
            },
            "customer": {
                "id": "2",
                "imageUrl": "https://example.com/images/customers/jane_smith.jpg",
                "firstName": "Jane",
                "lastName": "Smith",
                "fullName": "Jane Smith",
                "phone": "+11234567891",
                "birthDate": new Date("1985-05-15"),
                "isActive": true,
                "isEmailVerified": true,
                "email": "jane.smith@example.com",
                "role": "customer"
            },
            "restaurant": {
                "id": "2",
                "imageUrl": "https://example.com/images/restaurants/burger_haven.jpg",
                "name": "Burger Haven",
                "address": "456 Elm St, Springfield, IL",
                "phone": "+11234567891",
                "email": "contact@burgerhaven.com",
                "description": "Best burgers in town.",
                "ratingValue": 4.7,
                "reviewsCount": 200,
                "isActive": true,
                "workingHours": [
                    {
                        "id": "1",
                        "dayOfWeek": "monday",
                        "openingTime": "10:00",
                        "closingTime": "22:00",
                        "restaurantId": "2"
                    },
                    {
                        "id": "2",
                        "dayOfWeek": "tuesday",
                        "openingTime": "10:00",
                        "closingTime": "22:00",
                        "restaurantId": "2"
                    },
                    {
                        "id": "3",
                        "dayOfWeek": "wednesday",
                        "openingTime": "10:00",
                        "closingTime": "22:00",
                        "restaurantId": "2"
                    },
                    {
                        "id": "4",
                        "dayOfWeek": "thursday",
                        "openingTime": "10:00",
                        "closingTime": "22:00",
                        "restaurantId": "2"
                    },
                    {
                        "id": "5",
                        "dayOfWeek": "friday",
                        "openingTime": "10:00",
                        "closingTime": "23:00",
                        "restaurantId": "2"
                    },
                    {
                        "id": "6",
                        "dayOfWeek": "saturday",
                        "openingTime": "10:00",
                        "closingTime": "23:00",
                        "restaurantId": "2"
                    },
                    {
                        "id": "7",
                        "dayOfWeek": "sunday",
                        "openingTime": "10:00",
                        "closingTime": "21:00",
                        "restaurantId": "2"
                    }
                ]
            }
        },
        {
            "id": "3",
            "customerId": "3",
            "restaurantId": "3",
            "status": "ready",
            "createdAt": new Date("2024-06-01T14:00:00Z"),
            "items": [
                {
                    "id": "1",
                    "menuItemName": "Chicken Tacos",
                    "menuItemCategoryName": "Tacos",
                    "menuItemPrice": 7,
                    "menuItemImageUrl": "https://example.com/images/chicken_tacos.jpg",
                    "quantity": 3
                }
            ],
            "deliveryInformation": {
                "id": "3",
                "originAddress": "789 Oak St, Springfield, IL"
            },
            "priceInformation": {
                "id": "3",
                "orderItemsPrice": 21,
                "promocodeName": "TACO10",
                "promocodeDiscount": 2,
                "decountedItemsPrice": 19,
                "deliveryPrice": 4,
                "totalPrice": 23
            },
            "customer": {
                "id": "3",
                "imageUrl": "https://example.com/images/customers/adam_jones.jpg",
                "firstName": "Adam",
                "lastName": "Jones",
                "fullName": "Adam Jones",
                "phone": "+11234567892",
                "birthDate": new Date("1995-08-22"),
                "isActive": true,
                "isEmailVerified": true,
                "email": "adam.jones@example.com",
                "role": "customer"
            },
            "restaurant": {
                "id": "3",
                "imageUrl": "https://example.com/images/restaurants/taco_palace.jpg",
                "name": "Taco Palace",
                "address": "789 Oak St, Springfield, IL",
                "phone": "+11234567892",
                "email": "info@tacopalace.com",
                "description": "Delicious tacos and more.",
                "ratingValue": 4.6,
                "reviewsCount": 180,
                "isActive": true,
                "workingHours": [
                    {
                        "id": "1",
                        "dayOfWeek": "monday",
                        "openingTime": "11:00",
                        "closingTime": "21:00",
                        "restaurantId": "3"
                    },
                    {
                        "id": "2",
                        "dayOfWeek": "tuesday",
                        "openingTime": "11:00",
                        "closingTime": "21:00",
                        "restaurantId": "3"
                    },
                    {
                        "id": "3",
                        "dayOfWeek": "wednesday",
                        "openingTime": "11:00",
                        "closingTime": "21:00",
                        "restaurantId": "3"
                    },
                    {
                        "id": "4",
                        "dayOfWeek": "thursday",
                        "openingTime": "11:00",
                        "closingTime": "21:00",
                        "restaurantId": "3"
                    },
                    {
                        "id": "5",
                        "dayOfWeek": "friday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "3"
                    },
                    {
                        "id": "6",
                        "dayOfWeek": "saturday",
                        "openingTime": "11:00",
                        "closingTime": "22:00",
                        "restaurantId": "3"
                    },
                    {
                        "id": "7",
                        "dayOfWeek": "sunday",
                        "openingTime": "11:00",
                        "closingTime": "20:00",
                        "restaurantId": "3"
                    }
                ]
            }
        },
        {
            "id": "4",
            "customerId": "4",
            "restaurantId": "4",
            "status": "ready",
            "createdAt": new Date("2024-06-01T15:00:00Z"),
            "items": [
                {
                    "id": "1",
                    "menuItemName": "Pad Thai",
                    "menuItemCategoryName": "Noodles",
                    "menuItemPrice": 14,
                    "menuItemImageUrl": "https://example.com/images/pad_thai.jpg",
                    "quantity": 1
                }
            ],
            "deliveryInformation": {
                "id": "4",
                "originAddress": "101 Maple St, Springfield, IL"
            },
            "priceInformation": {
                "id": "4",
                "orderItemsPrice": 14,
                "promocodeName": "THAI5",
                "promocodeDiscount": 3,
                "decountedItemsPrice": 11,
                "deliveryPrice": 4,
                "totalPrice": 15
            },
            "customer": {
                "id": "4",
                "imageUrl": "https://example.com/images/customers/susan_wilson.jpg",
                "firstName": "Susan",
                "lastName": "Wilson",
                "fullName": "Susan Wilson",
                "phone": "+11234567893",
                "birthDate": new Date("1978-12-05"),
                "isActive": true,
                "isEmailVerified": true,
                "email": "susan.wilson@example.com",
                "role": "customer"
            },
            "restaurant": {
                "id": "4",
                "imageUrl": "https://example.com/images/restaurants/thai_corner.jpg",
                "name": "Thai Corner",
                "address": "101 Maple St, Springfield, IL",
                "phone": "+11234567893",
                "email": "contact@thaicorner.com",
                "description": "Authentic Thai cuisine.",
                "ratingValue": 4.8,
                "reviewsCount": 220,
                "isActive": true,
                "workingHours": [
                    {
                        "id": "1",
                        "dayOfWeek": "monday",
                        "openingTime": "13:00",
                        "closingTime": "21:00",
                        "restaurantId": "4"
                    },
                    {
                        "id": "2",
                        "dayOfWeek": "tuesday",
                        "openingTime": "13:00",
                        "closingTime": "21:00",
                        "restaurantId": "4"
                    },
                    {
                        "id": "3",
                        "dayOfWeek": "wednesday",
                        "openingTime": "13:00",
                        "closingTime": "21:00",
                        "restaurantId": "4"
                    },
                    {
                        "id": "4",
                        "dayOfWeek": "thursday",
                        "openingTime": "13:00",
                        "closingTime": "21:00",
                        "restaurantId": "4"
                    },
                    {
                        "id": "5",
                        "dayOfWeek": "friday",
                        "openingTime": "13:00",
                        "closingTime": "22:00",
                        "restaurantId": "4"
                    },
                    {
                        "id": "6",
                        "dayOfWeek": "saturday",
                        "openingTime": "13:00",
                        "closingTime": "22:00",
                        "restaurantId": "4"
                    },
                    {
                        "id": "7",
                        "dayOfWeek": "sunday",
                        "openingTime": "13:00",
                        "closingTime": "21:00",
                        "restaurantId": "4"
                    }
                ]
            }
        },
        {
            "id": "5",
            "customerId": "5",
            "restaurantId": "5",
            "status": "ready",
            "createdAt": new Date("2024-06-01T16:00:00Z"),
            "items": [
                {
                    "id": "1",
                    "menuItemName": "Sushi Platter",
                    "menuItemCategoryName": "Sushi",
                    "menuItemPrice": 25,
                    "menuItemImageUrl": "https://example.com/images/sushi_platter.jpg",
                    "quantity": 1
                }
            ],
            "deliveryInformation": {
                "id": "5",
                "originAddress": "202 Birch St, Springfield, IL"
            },
            "priceInformation": {
                "id": "5",
                "orderItemsPrice": 25,
                "promocodeName": "SUSHI15",
                "promocodeDiscount": 5,
                "decountedItemsPrice": 20,
                "deliveryPrice": 5,
                "totalPrice": 25
            },
            "customer": {
                "id": "5",
                "imageUrl": "https://example.com/images/customers/mike_brown.jpg",
                "firstName": "Mike",
                "lastName": "Brown",
                "fullName": "Mike Brown",
                "phone": "+11234567894",
                "birthDate": new Date("1980-07-14"),
                "isActive": true,
                "isEmailVerified": true,
                "email": "mike.brown@example.com",
                "role": "customer"
            },
            "restaurant": {
                "id": "5",
                "imageUrl": "https://example.com/images/restaurants/sushi_world.jpg",
                "name": "Sushi World",
                "address": "202 Birch St, Springfield, IL",
                "phone": "+11234567894",
                "email": "info@sushiworld.com",
                "description": "Fresh and delicious sushi.",
                "ratingValue": 4.9,
                "reviewsCount": 250,
                "isActive": true,
                "workingHours": [
                    {
                        "id": "1",
                        "dayOfWeek": "monday",
                        "openingTime": "12:00",
                        "closingTime": "22:00",
                        "restaurantId": "5"
                    },
                    {
                        "id": "2",
                        "dayOfWeek": "tuesday",
                        "openingTime": "12:00",
                        "closingTime": "22:00",
                        "restaurantId": "5"
                    },
                    {
                        "id": "3",
                        "dayOfWeek": "wednesday",
                        "openingTime": "12:00",
                        "closingTime": "22:00",
                        "restaurantId": "5"
                    },
                    {
                        "id": "4",
                        "dayOfWeek": "thursday",
                        "openingTime": "12:00",
                        "closingTime": "22:00",
                        "restaurantId": "5"
                    },
                    {
                        "id": "5",
                        "dayOfWeek": "friday",
                        "openingTime": "12:00",
                        "closingTime": "23:00",
                        "restaurantId": "5"
                    },
                    {
                        "id": "6",
                        "dayOfWeek": "saturday",
                        "openingTime": "12:00",
                        "closingTime": "23:00",
                        "restaurantId": "5"
                    },
                    {
                        "id": "7",
                        "dayOfWeek": "sunday",
                        "openingTime": "12:00",
                        "closingTime": "21:00",
                        "restaurantId": "5"
                    }
                ]
            }
        }
    ],
    currentCourierOrders: []
}

const currentCourierSlice = createSlice({
    name: 'currentCourier',
    initialState,
    reducers: {
       
    }
})

export default currentCourierSlice.reducer;