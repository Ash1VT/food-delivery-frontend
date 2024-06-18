import { createSlice } from "@reduxjs/toolkit"
import { RestaurantApplication } from "src/models/restaurantApplication.interfaces"
import { confirmRestaurantApplication, declineRestaurantApplication, fetchRestaurantsApplications, updateRestaurantApplication } from "../actions/restaurantApplications.actions"

interface RestaurantApplicationsState {
    isLoading: boolean
    applications: RestaurantApplication[]
    error?: string | undefined | null
}

const initialState: RestaurantApplicationsState = {
    isLoading: false,
    applications: [],
    error: null
}

const restaurantApplicationsSlice = createSlice({
    name: 'restaurantApplications',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Restaurants Applications
        
        builder.addCase(fetchRestaurantsApplications.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchRestaurantsApplications.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.applications = action.payload
        })

        builder.addCase(fetchRestaurantsApplications.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Restaurant Application

        builder.addCase(updateRestaurantApplication.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateRestaurantApplication.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.applications = state.applications.map(app => app.id === action.payload.id ? action.payload : app)
        })

        builder.addCase(updateRestaurantApplication.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Confirm Restaurant Application

        builder.addCase(confirmRestaurantApplication.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(confirmRestaurantApplication.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.applications = state.applications.filter((application) => application.id !== action.payload)
        })

        builder.addCase(confirmRestaurantApplication.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        
        // Decline Restaurant Application

        builder.addCase(declineRestaurantApplication.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(declineRestaurantApplication.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.applications = state.applications.filter((application) => application.id !== action.payload)
        })

        builder.addCase(declineRestaurantApplication.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }
})

export default restaurantApplicationsSlice.reducer;