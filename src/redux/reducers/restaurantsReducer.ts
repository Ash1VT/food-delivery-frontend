import { createSlice } from "@reduxjs/toolkit";
import { RestaurantsList } from "src/models/restaurant.interfaces";
import { fetchRestaurantsPage } from "../actions/restaurants.actions";

interface RestaurantsState {
    isLoading: boolean
    restaurants: RestaurantsList[]
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
       
    },
    extraReducers: (builder) => {
        // Fetch Restaurants
        
        builder.addCase(fetchRestaurantsPage.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchRestaurantsPage.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null

            if (action.payload.items.length === 0) return

            const restaurantPage = state.restaurants.find((restaurant) => restaurant.limit === action.payload.limit && restaurant.offset === action.payload.offset)

            if(restaurantPage) {
                restaurantPage.items = action.payload.items
                return
            }
            
            state.restaurants.push(action.payload)
        })

        builder.addCase(fetchRestaurantsPage.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }
})

export default restaurantsSlice.reducer;