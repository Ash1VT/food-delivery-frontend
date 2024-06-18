import { createSlice } from "@reduxjs/toolkit"
import { Review } from "src/models/reviews.interfaces"
import { createMenuItemReview, updateMenuItemReview, deleteMenuItemReview, fetchCurrentCustomerMenuItemReview } from "../actions/currentCustomerMenuItemReview.actions"

interface CurrentCustomerMenuItemReviewState {
    isLoading: boolean
    review?: Review | undefined | null
    error?: string | undefined | null
}

const initialState: CurrentCustomerMenuItemReviewState = {
    isLoading: false,
    review: null,
    error: null
}


const currentCustomerMenuItemReviewSlice = createSlice({
    name: 'currentCustomerMenuItemReview',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Current Customer Menu Item Review

        builder.addCase(fetchCurrentCustomerMenuItemReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentCustomerMenuItemReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.review = action.payload
        })

        builder.addCase(fetchCurrentCustomerMenuItemReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        
        // Create Menu Item Review

        builder.addCase(createMenuItemReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createMenuItemReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.review = action.payload
        })

        builder.addCase(createMenuItemReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Menu Item Review

        builder.addCase(updateMenuItemReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateMenuItemReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.review = action.payload
        })

        builder.addCase(updateMenuItemReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Delete Menu Item Review

        builder.addCase(deleteMenuItemReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deleteMenuItemReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.review = null
        })

        builder.addCase(deleteMenuItemReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default currentCustomerMenuItemReviewSlice.reducer;