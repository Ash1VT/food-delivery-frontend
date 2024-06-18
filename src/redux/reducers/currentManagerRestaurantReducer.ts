import { createSlice } from "@reduxjs/toolkit"
import { Restaurant } from "src/models/restaurant.interfaces"
import { activateRestaurant, createRestaurantWorkingHours, deactivateRestaurant, deleteRestaurantWorkingHours, fetchCurrentManagerRestaurant, updateRestaurantWorkingHours, uploadRestaurantImage } from "../actions/currentManagerRestaurant.actions"

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
       
    },
    extraReducers: (builder) => {
        // Fetch Current Manager Restaurant

        builder.addCase(fetchCurrentManagerRestaurant.pending, (state) => {
            state.isLoading = true
        })
        
        builder.addCase(fetchCurrentManagerRestaurant.fulfilled, (state, action) => {
            state.isLoading = false
            state.restaurant = action.payload
            state.error = null
        })
        
        builder.addCase(fetchCurrentManagerRestaurant.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Upload Restaurant Image

        builder.addCase(uploadRestaurantImage.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(uploadRestaurantImage.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            if (state.restaurant) state.restaurant.imageUrl = action.payload.imageUrl
        })

        // Activate Restaurant

        builder.addCase(activateRestaurant.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(activateRestaurant.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            if (state.restaurant) state.restaurant.isActive = action.payload.isActive
        })

        builder.addCase(activateRestaurant.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Deactivate Restaurant

        builder.addCase(deactivateRestaurant.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deactivateRestaurant.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            if (state.restaurant) state.restaurant.isActive = action.payload.isActive
        })

        builder.addCase(deactivateRestaurant.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create Restaurant Working Hours

        builder.addCase(createRestaurantWorkingHours.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createRestaurantWorkingHours.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            if (state.restaurant) state.restaurant.workingHours.push(action.payload)
        })

        builder.addCase(createRestaurantWorkingHours.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Restaurant Working Hours

        builder.addCase(updateRestaurantWorkingHours.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateRestaurantWorkingHours.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            if (state.restaurant) state.restaurant.workingHours = state.restaurant.workingHours.map(workingHour => workingHour.id === action.payload.id ? action.payload : workingHour)
        })

        builder.addCase(updateRestaurantWorkingHours.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Delete Restaurant Working Hours

        builder.addCase(deleteRestaurantWorkingHours.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deleteRestaurantWorkingHours.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            if (state.restaurant) state.restaurant.workingHours = state.restaurant.workingHours.filter(workingHour => workingHour.id !== action.payload)
        })

        builder.addCase(deleteRestaurantWorkingHours.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default currentManagerRestaurantSlice.reducer;