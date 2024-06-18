import { createSlice } from "@reduxjs/toolkit"
import { Review } from "src/models/reviews.interfaces"
import { fetchCourierReviews } from "../actions/currentCourierReviews.actions"

interface CurrentCourierReviewsState {
    isLoading: boolean
    reviews: Review[]
    error?: string | undefined | null
}

const initialState: CurrentCourierReviewsState = {
    isLoading: false,
    reviews: [],
    error: null
}

const currentCourierReviewsSlice = createSlice({
    name: 'currentCourierReviews',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Current Courier Reviews

        builder.addCase(fetchCourierReviews.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCourierReviews.fulfilled, (state, action) => {
            state.isLoading = false
            state.reviews = action.payload
        })

        builder.addCase(fetchCourierReviews.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
    
})

export default currentCourierReviewsSlice.reducer;