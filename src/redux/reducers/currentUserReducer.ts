import { createSlice } from "@reduxjs/toolkit";
import IUser from "../models/IUser";
import ICustomerAddress from "../models/ICustomerAddress";

interface CurrentUserState {
    currentUser: IUser | undefined | null
}

const initialState: CurrentUserState = {
    currentUser: {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
        phone: '1234567890',
        birthDate: new Date("1990-01-01"),
        isActive: true,
        isEmailVerified: true,
        email: 'john@gmail.com',
        role: 'customer',
    }
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
       
    }
})

export default currentUserSlice.reducer;