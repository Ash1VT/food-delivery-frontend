import { createSlice } from "@reduxjs/toolkit";
import IRestaurant from "../models/IRestaurant";

interface RestaurantsState {
    restaurants: IRestaurant[]
}

const initialState: RestaurantsState = {
    restaurants: [
        {
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
        },
        {
            "id": "2",
            "imageUrl": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
            "name": "Monty's Restaurant",
            "address": "456 Oak Street, Springfield, IL",
            "phone": "+11234561234",
            "email": "info@montysrestaurant.com",
            "description": "Family-friendly dining experience with a diverse menu.",
            "ratingValue": 4.2,
            "reviewsCount": 120,
            "isActive": true,
            "workingHours": [
                {
                    "id": "1",
                    "dayOfWeek": "monday",
                    "openingTime": "10:00",
                    "closingTime": "21:00",
                    "restaurantId": "2"
                },
                {
                    "id": "2",
                    "dayOfWeek": "tuesday",
                    "openingTime": "10:00",
                    "closingTime": "21:00",
                    "restaurantId": "2"
                },
                {
                    "id": "3",
                    "dayOfWeek": "wednesday",
                    "openingTime": "10:00",
                    "closingTime": "21:00",
                    "restaurantId": "2"
                },
                {
                    "id": "4",
                    "dayOfWeek": "thursday",
                    "openingTime": "10:00",
                    "closingTime": "21:00",
                    "restaurantId": "2"
                },
                {
                    "id": "5",
                    "dayOfWeek": "friday",
                    "openingTime": "10:00",
                    "closingTime": "22:00",
                    "restaurantId": "2"
                },
                {
                    "id": "6",
                    "dayOfWeek": "saturday",
                    "openingTime": "09:00",
                    "closingTime": "22:00",
                    "restaurantId": "2"
                },
                {
                    "id": "7",
                    "dayOfWeek": "sunday",
                    "openingTime": "09:00",
                    "closingTime": "20:00",
                    "restaurantId": "2"
                }
            ]
        },
        {
            "id": "3",
            "imageUrl": "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
            "name": "Ocean's Grill",
            "address": "789 Palm Avenue, Springfield, IL",
            "phone": "+11234562345",
            "email": "info@oceansgrill.com",
            "description": "Seafood restaurant with a beachside atmosphere.",
            "ratingValue": 4.6,
            "reviewsCount": 180,
            "isActive": true,
            "workingHours": [
                {
                    "id": "1",
                    "dayOfWeek": "monday",
                    "openingTime": "11:30",
                    "closingTime": "21:00",
                    "restaurantId": "3"
                },
                {
                    "id": "2",
                    "dayOfWeek": "tuesday",
                    "openingTime": "11:30",
                    "closingTime": "21:00",
                    "restaurantId": "3"
                },
                {
                    "id": "3",
                    "dayOfWeek": "wednesday",
                    "openingTime": "11:30",
                    "closingTime": "21:00",
                    "restaurantId": "3"
                },
                {
                    "id": "4",
                    "dayOfWeek": "thursday",
                    "openingTime": "11:30",
                    "closingTime": "21:00",
                    "restaurantId": "3"
                },
                {
                    "id": "5",
                    "dayOfWeek": "friday",
                    "openingTime": "11:30",
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
        },
        {
            "id": "4",
            "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
            "name": "Sushi Paradise",
            "address": "890 Maple Street, Springfield, IL",
            "phone": "+11234563456",
            "email": "info@sushiparadise.com",
            "description": "Exquisite sushi and Japanese cuisine.",
            "ratingValue": 4.8,
            "reviewsCount": 200,
            "isActive": true,
            "workingHours": [
                {
                    "id": "1",
                    "dayOfWeek": "monday",
                    "openingTime": "12:00",
                    "closingTime": "21:30",
                    "restaurantId": "4"
                },
                {
                    "id": "2",
                    "dayOfWeek": "tuesday",
                    "openingTime": "12:00",
                    "closingTime": "21:30",
                    "restaurantId": "4"
                },
                {
                    "id": "3",
                    "dayOfWeek": "wednesday",
                    "openingTime": "12:00",
                    "closingTime": "21:30",
                    "restaurantId": "4"
                },
                {
                    "id": "4",
                    "dayOfWeek": "thursday",
                    "openingTime": "12:00",
                    "closingTime": "21:30",
                    "restaurantId": "4"
                },
                {
                    "id": "5",
                    "dayOfWeek": "friday",
                    "openingTime": "12:00",
                    "closingTime": "22:00",
                    "restaurantId": "4"
                },
                {
                    "id": "6",
                    "dayOfWeek": "saturday",
                    "openingTime": "12:00",
                    "closingTime": "22:00",
                    "restaurantId": "4"
                },
                {
                    "id": "7",
                    "dayOfWeek": "sunday",
                    "openingTime": "12:00",
                    "closingTime": "21:00",
                    "restaurantId": "4"
                }
            ]
        },
        {
            "id": "5",
            "imageUrl": "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
            "name": "Thai Spice",
            "address": "567 Elm Street, Springfield, IL",
            "phone": "+11234564567",
            "email": "info@thaispice.com",
            "description": "Delicious Thai cuisine with authentic flavors.",
            "ratingValue": 4.4,
            "reviewsCount": 160,
            "isActive": true,
            "workingHours": [
                {
                    "id": "1",
                    "dayOfWeek": "monday",
                    "openingTime": "11:30",
                    "closingTime": "21:00",
                    "restaurantId": "5"
                },
                {
                    "id": "2",
                    "dayOfWeek": "tuesday",
                    "openingTime": "11:30",
                    "closingTime": "21:00",
                    "restaurantId": "5"
                },
                {
                    "id": "3",
                    "dayOfWeek": "wednesday",
                    "openingTime": "11:30",
                    "closingTime": "21:00",
                    "restaurantId": "5"
                },
                {
                    "id": "4",
                    "dayOfWeek": "thursday",
                    "openingTime": "11:30",
                    "closingTime": "21:00",
                    "restaurantId": "5"
                },
                {
                    "id": "5",
                    "dayOfWeek": "friday",
                    "openingTime": "11:30",
                    "closingTime": "22:00",
                    "restaurantId": "5"
                },
                {
                    "id": "6",
                    "dayOfWeek": "saturday",
                    "openingTime": "11:00",
                    "closingTime": "22:00",
                    "restaurantId": "5"
                },
                {
                    "id": "7",
                    "dayOfWeek": "sunday",
                    "openingTime": "11:00",
                    "closingTime": "20:00",
                    "restaurantId": "5"
                }
            ]
        },
        {
            "id": "6",
            "imageUrl": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
            "name": "Mexican Cantina",
            "address": "678 Walnut Street, Springfield, IL",
            "phone": "+11234565678",
            "email": "info@mexicancantina.com",
            "description": "Authentic Mexican dishes with a vibrant atmosphere.",
            "ratingValue": 4.7,
            "reviewsCount": 190,
            "isActive": true,
            "workingHours": [
                {
                    "id": "1",
                    "dayOfWeek": "monday",
                    "openingTime": "12:00",
                    "closingTime": "21:30",
                    "restaurantId": "6"
                },
                {
                    "id": "2",
                    "dayOfWeek": "tuesday",
                    "openingTime": "12:00",
                    "closingTime": "21:30",
                    "restaurantId": "6"
                },
                {
                    "id": "3",
                    "dayOfWeek": "wednesday",
                    "openingTime": "12:00",
                    "closingTime": "21:30",
                    "restaurantId": "6"
                },
                {
                    "id": "4",
                    "dayOfWeek": "thursday",
                    "openingTime": "12:00",
                    "closingTime": "21:30",
                    "restaurantId": "6"
                },
                {
                    "id": "5",
                    "dayOfWeek": "friday",
                    "openingTime": "12:00",
                    "closingTime": "22:00",
                    "restaurantId": "6"
                },
                {
                    "id": "6",
                    "dayOfWeek": "saturday",
                    "openingTime": "11:00",
                    "closingTime": "22:00",
                    "restaurantId": "6"
                },
                {
                    "id": "7",
                    "dayOfWeek": "sunday",
                    "openingTime": "11:00",
                    "closingTime": "21:00",
                    "restaurantId": "6"
                }
            ]
        }
    ]
}

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
       
    }
})

export default restaurantsSlice.reducer;