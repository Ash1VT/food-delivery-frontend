import { createSlice } from "@reduxjs/toolkit";
import ICustomerAddress from "../models/ICustomerAddress";
import IOrder from "../models/IOrder";
import IOrderReview from "../models/IOrderReview";

interface CurrentCustomerState {
    currentCustomerAddresses: ICustomerAddress[]
    currentCustomerOrders: IOrder[]
    currentCustomerOrdersReviews: IOrderReview[]
}

const initialState: CurrentCustomerState = {
    currentCustomerAddresses: [
        {
            "id": "1",
            "country": "USA",
            "region": "California",
            "details": "1234 Elm Street, Apartment 56, San Francisco, CA 94107",
            "approvalStatus": "approved",
            "customerId": "1"
        },
        {
            "id": "2",
            "country": "Canada",
            "region": "Ontario",
            "details": "Approved for regular delivery with additional safety checks.",
            "approvalStatus": "approved",
            "customerId": "2"
        },
        {
            "id": "3",
            "country": "UK",
            "region": "London",
            "details": "Approved for next-day delivery in central London.",
            "approvalStatus": "approved",
            "customerId": "3"
        },
        {
            "id": "4",
            "country": "Australia",
            "region": "New South Wales",
            "details": "Approved for express delivery in metropolitan areas.",
            "approvalStatus": "approved",
            "customerId": "4"
        },
        {
            "id": "5",
            "country": "Germany",
            "region": "Bavaria",
            "details": "Approved for delivery with environmental compliance.",
            "approvalStatus": "approved",
            "customerId": "5"
        },
        {
            "id": "6",
            "country": "Germany",
            "region": "Bavaria",
            "details": "Approved for delivery with environmental compliance.",
            "approvalStatus": "rejected",
            "customerId": "5"
        },
        {
            "id": "7",
            "country": "Germany",
            "region": "Bavaria",
            "details": "Approved for delivery with environmental compliance.",
            "approvalStatus": "pending",
            "customerId": "5"
        },
        
        {
            "id": "8",
            "country": "Germany",
            "region": "Bavaria",
            "details": "Approved for delivery with environmental compliance.",
            "approvalStatus": "pending",
            "customerId": "5"
        },
        
        {
            "id": "9",
            "country": "Germany",
            "region": "Bavaria",
            "details": "Approved for delivery with environmental compliance.",
            "approvalStatus": "pending",
            "customerId": "5"
        },
        
        {
            "id": "10",
            "country": "Germany",
            "region": "Bavaria",
            "details": "Approved for delivery with environmental compliance.",
            "approvalStatus": "pending",
            "customerId": "5"
        },
        
        {
            "id": "11",
            "country": "Germany",
            "region": "Bavaria",
            "details": "Approved for delivery with environmental compliance.",
            "approvalStatus": "pending",
            "customerId": "5"
        },
        
        {
            "id": "12",
            "country": "Germany",
            "region": "Bavaria",
            "details": "Approved for delivery with environmental compliance.",
            "approvalStatus": "pending",
            "customerId": "5"
        }
    ],
    currentCustomerOrders: [{
        "id": "1",
        "customerId": "1",
        "restaurantId": "1",
        "status": "delivered",
        "createdAt": new Date("2024-06-01T12:00:00Z"),
        "items": [
            {
                "id": "1",
                "menuItemName": "Margherita Pizza",
                "menuItemCategoryName": "Pizza",
                "menuItemPrice": 12,
                "menuItemImageUrl": "https://foodbyjonister.com/wp-content/uploads/2020/01/MargheritaPizza.jpg",
                "quantity": 1
            }
        ],
        "deliveryInformation": {
            "id": "1",
            "originAddress": "123 Main St, Springfield, IL",
            "destinationAddress": "456 Oak St, Springfield, IL",
            "actualDeliveryTime": 220,
            "deliveryAcceptedAt": new Date("2024-06-04 01:00:00+03:00"),
            "deliveryFinishedAt": new Date("2024-06-04 04:00:00+03:00"),
            "supposedDeliveryTime": 210,
            "deliveryDistance": 5,
            "deliveryType": "walking",

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
        },
        "courier": {
            "id": "1",
            "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "John Doe",
            "phone": "+11234567890",
            "birthDate": new Date("1990-01-01"),
            "isActive": true,
            "isEmailVerified": true,
            "email": "john.doe@example.com",
            "role": "courier"
        },
        "courierRating": 4.5,
        "review": {
            "id": "1",
            "orderId": "1",
            "userFullName": "John Doe",
            "userId": "1",
            "userImageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "rating": 4.5,
            "text": "Great food!",
        }
    },
    ],
    currentCustomerOrdersReviews: []
}

const currentCustomerSlice = createSlice({
    name: 'currentCustomer',
    initialState,
    reducers: {
       
    }
})

export default currentCustomerSlice.reducer;