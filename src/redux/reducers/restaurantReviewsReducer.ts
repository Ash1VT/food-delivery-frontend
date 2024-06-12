import { createSlice } from "@reduxjs/toolkit";
import { Review } from "src/models/reviews.interfaces";

interface RestaurantReviewsState {
    isLoading: boolean
    reviews: Review[]
    error?: string | undefined | null
}

const initialState: RestaurantReviewsState = {
    isLoading: false,
    reviews: [],
    error: null
}

const restaurantReviewsSlice = createSlice({
    name: 'restaurantReviews',
    initialState,
    reducers: {
        
    }
})

export default restaurantReviewsSlice.reducer;