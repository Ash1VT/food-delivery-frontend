import { createSlice } from "@reduxjs/toolkit";
import IUser from "../models/IUser";

interface CurrentUserState {
    currentUser: IUser | undefined | null
}

const initialState: CurrentUserState = {
    currentUser: {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        fullName: 'Test user',
        email: 'john@gmail.com',
        role: 'Good boy'
    }
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
       
    }
})

export default currentUserSlice.reducer;