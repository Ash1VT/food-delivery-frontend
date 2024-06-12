import { createSlice } from "@reduxjs/toolkit"
import { Review } from "src/models/reviews.interfaces"

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
       
    }
})

export default currentCustomerMenuItemReviewSlice.reducer;