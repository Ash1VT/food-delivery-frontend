import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "src/models/restaurant.interfaces";

interface RestaurantsState {
    isLoading: boolean
    restaurants: Restaurant[]
    error?: string | undefined | null
}

const initialState: RestaurantsState = {
    isLoading: false,
    restaurants: [],
    error: null
}

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
       
    }
})

export default restaurantsSlice.reducer;