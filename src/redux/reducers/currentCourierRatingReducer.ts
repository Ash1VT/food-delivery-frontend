import { createSlice } from "@reduxjs/toolkit";

interface CourierRating {
    ratingValue: number
    reviewsCount: number
}

interface CurrentCourierRatingState {
    isLoading: false
    rating?: CourierRating | undefined | null
    error?: string | undefined | null
}

const initialState: CurrentCourierRatingState = {
    isLoading: false,
    rating: null,
    error: null
}

const currentCourierRatingSlice = createSlice({
    name: 'currentCourierRating',
    initialState,
    reducers: {
       
    }
})

export default currentCourierRatingSlice.reducer;