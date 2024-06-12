import { createSlice } from "@reduxjs/toolkit"
import { Review } from "src/models/reviews.interfaces"

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
       
    }
})

export default currentCustomerRestaurantReviewSlice.reducer;