import { createSlice } from "@reduxjs/toolkit"
import { User } from "src/models/user.interfaces"

interface UsersState {
    isLoading: boolean
    users: User[]
    error?: string | undefined | null
}

const initialState: UsersState = {
    isLoading: false,
    users: [],
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export default usersSlice.reducer;