import { createSlice } from "@reduxjs/toolkit"
import { Review } from "src/models/reviews.interfaces"
import { createRestaurantReview, updateRestaurantReview, deleteRestaurantReview, fetchCurrentCustomerRestaurantReview } from "../actions/currentCustomerRestaurantReview.actions"

interface CurrentCustomerRestaurantReviewState {
    isLoading: boolean
    review?: Review | undefined | null
    error?: string | undefined | null
}

const initialState: CurrentCustomerRestaurantReviewState = {
    isLoading: false,
    review: null,
    error: null
}


const currentCustomerRestaurantReviewSlice = createSlice({
    name: 'currentCustomerRestaurantReview',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Current Customer Restaurant Review

        builder.addCase(fetchCurrentCustomerRestaurantReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentCustomerRestaurantReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.review = action.payload
        })

        builder.addCase(fetchCurrentCustomerRestaurantReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create Restaurant Review

        builder.addCase(createRestaurantReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createRestaurantReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.review = action.payload
        })

        builder.addCase(createRestaurantReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Restaurant Review

        builder.addCase(updateRestaurantReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateRestaurantReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.review = action.payload
        })

        builder.addCase(updateRestaurantReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Delete Restaurant Review

        builder.addCase(deleteRestaurantReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deleteRestaurantReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.review = null
        })

        builder.addCase(deleteRestaurantReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default currentCustomerRestaurantReviewSlice.reducer;