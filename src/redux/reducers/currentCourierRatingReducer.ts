import { createSlice } from "@reduxjs/toolkit";
import { CourierRating } from "src/models/courierRating,interfaces";
import { fetchCourierRating } from "../actions/currentCourierRating.actions";


interface CurrentCourierRatingState {
    isLoading: boolean
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
        
    },
    extraReducers: (builder) => {
        // Fetch Current Courier Rating

        builder.addCase(fetchCourierRating.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCourierRating.fulfilled, (state, action) => {
            state.isLoading = false
            state.rating = action.payload
            state.error = null
        })

        builder.addCase(fetchCourierRating.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default currentCourierRatingSlice.reducer;