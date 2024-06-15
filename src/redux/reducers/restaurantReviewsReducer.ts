import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "src/models/restaurant.interfaces";
import { Review } from "src/models/reviews.interfaces";
import { fetchRestaurant, fetchRestaurantReviews } from "../actions/restaurantReviews.actions";

interface RestaurantReviewsState {
    isRestaurantLoading: boolean
    isReviewsLoading: boolean
    restaurant?: Restaurant | undefined | null
    reviews: Review[]
    restaurantError?: string | undefined | null
    reviewsError?: string | undefined | null
}

const initialState: RestaurantReviewsState = {
    isRestaurantLoading: false,
    isReviewsLoading: false,
    restaurant: null,
    reviews: [],
    restaurantError: null,
    reviewsError: null
}

const restaurantReviewsSlice = createSlice({
    name: 'restaurantReviews',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        // Fetch Restaurant

        builder.addCase(fetchRestaurant.pending, (state) => {
            state.isRestaurantLoading = true
        })

        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.isRestaurantLoading = false
            state.restaurant = action.payload
            state.restaurantError = null
        })

        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.isRestaurantLoading = false
            state.restaurantError = action.error.message
        })


        // Fetch Restaurant Reviews

        builder.addCase(fetchRestaurantReviews.pending, (state) => {
            state.isReviewsLoading = true
        })

        builder.addCase(fetchRestaurantReviews.fulfilled, (state, action) => {
            state.isReviewsLoading = false
            state.reviews = action.payload
            state.reviewsError = null
        })

        builder.addCase(fetchRestaurantReviews.rejected, (state, action) => {
            state.isReviewsLoading = false
            state.reviewsError = action.error.message
        })
    }
                
})

export default restaurantReviewsSlice.reducer;