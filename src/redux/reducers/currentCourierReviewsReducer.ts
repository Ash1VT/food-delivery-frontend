import { createSlice } from "@reduxjs/toolkit"
import { Review } from "src/models/reviews.interfaces"

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
       
    }
})

export default currentCourierReviewsSlice.reducer;