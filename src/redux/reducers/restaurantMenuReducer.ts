import { createSlice } from "@reduxjs/toolkit";
import { Menu } from "src/models/menu.interfaces";
import { Restaurant } from "src/models/restaurant.interfaces";
import { fetchRestaurant, fetchRestaurantMenu } from "../actions/restaurantMenu.actions";

interface RestaurantMenuState {
    isLoading: boolean
    restaurant?: Restaurant | undefined | null
    menu?: Menu | undefined | null
    error?: string | undefined | null
}

const initialState: RestaurantMenuState = {
    isLoading: false,
    restaurant: null,
    menu: null,
    error: null
}

export const restaurantMenuSlice = createSlice({
    name: 'restaurantMenu',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        
        // Fetch Restaurant
        
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.isLoading = false
            state.restaurant = action.payload
            state.error = null
        })
        
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Fetch Restaurant Menu
        
        builder.addCase(fetchRestaurantMenu.pending, (state) => {
            state.isLoading = true
        })
        
        builder.addCase(fetchRestaurantMenu.fulfilled, (state, action) => {
            state.isLoading = false
            state.menu = action.payload
            state.error = null
        })
        
        builder.addCase(fetchRestaurantMenu.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default restaurantMenuSlice.reducer;