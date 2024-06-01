import { createSlice } from "@reduxjs/toolkit";
import IUser from "../models/IUser";
import IRestaurantApplication from "../models/IRestaurantApplication";
import ICustomerAddress from "../models/ICustomerAddress";

interface CurrentModeratorState {
    users: IUser[]
    restaurantApplications: IRestaurantApplication[]
    customerAddresses: ICustomerAddress[]
}

const initialState: CurrentModeratorState = {
    users: [
        {
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            fullName: 'Test User',
            phone: '1234567890',
            birthDate: new Date(),
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            email: 'john@gmail.com',
            role: 'customer',
            isActive: true,
            isEmailVerified: true
        },
        {
            id: '2',
            firstName: 'John',
            lastName: 'Doe',
            fullName: 'Test User',
            phone: '1234567890',
            birthDate: new Date(),
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            email: 'john@gmail.com',
            role: 'customer',
            isActive: true,
            isEmailVerified: true
        }
    ],
    restaurantApplications: [
        {
            id: '1',
            name: 'Test Restaurant',
            email: 'john@gmail.com',
            phone: '1234567890',
            address: 'Test Address',
            description: 'Test Description',
            type: 'takeout',
            restaurantManagerId: '1'
        },
        {
            id: '2',
            name: 'Test Restaurant',
            email: 'john@gmail.com',
            phone: '1234567890',
            address: 'Test Address',
            description: 'Test Description',
            type: 'takeout',
            restaurantManagerId: '1'
        }
    ],
    customerAddresses: [
        {
            id: '1',
            country: 'Test',
            region: 'Test',
            details: 'Test',
            approvalStatus: 'approved',
            customerId: '1'
        },
        {
            id: '2',
            country: 'Test',
            region: 'Test',
            details: 'Test',
            approvalStatus: 'approved',
            customerId: '1'
        }
    ]
}

const currentModeratorSlice = createSlice({
    name: 'currentModerator',
    initialState,
    reducers: {
       
    }
})

export default currentModeratorSlice.reducer;