import { createSlice } from "@reduxjs/toolkit"
import { Restaurant } from "src/models/restaurant.interfaces"
import { RestaurantApplication } from "src/models/restaurantApplication.interfaces"
import { createRestaurant, fetchCurrentManagerRestaurantApplications, updateRestaurant } from "../actions/currentManagerRestaurantApplications.actions"

interface CurrentManagerRestaurantApplicationsState {
    isLoading: boolean
    applications: RestaurantApplication[]
    error?: string | undefined | null
}

const initialState: CurrentManagerRestaurantApplicationsState = {
    isLoading: false,
    applications: [],
    error: null
}

const currentManagerRestaurantApplicationsSlice = createSlice({
    name: 'currentManagerRestaurantApplications',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Current Manager Restaurant Applications

        builder.addCase(fetchCurrentManagerRestaurantApplications.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentManagerRestaurantApplications.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.applications = action.payload
        })

        builder.addCase(fetchCurrentManagerRestaurantApplications.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create Restaurant

        builder.addCase(createRestaurant.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createRestaurant.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.applications.push(action.payload)
        })

        builder.addCase(createRestaurant.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Restaurant

        builder.addCase(updateRestaurant.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateRestaurant.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.applications.push(action.payload)
        })

        builder.addCase(updateRestaurant.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default currentManagerRestaurantApplicationsSlice.reducer;