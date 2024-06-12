import { createSlice } from "@reduxjs/toolkit"
import { Restaurant } from "src/models/restaurant.interfaces"

interface CurrentManagerRestaurantState {
    isLoading: boolean
    restaurant?: Restaurant | undefined | null
    error?: string | undefined | null
}

const initialState: CurrentManagerRestaurantState = {
    isLoading: false,
    restaurant: null,
    error: null
}

const currentManagerRestaurantSlice = createSlice({
    name: 'currentManagerRestaurant',
    initialState,
    reducers: {
       
    }
})

export default currentManagerRestaurantSlice.reducer;