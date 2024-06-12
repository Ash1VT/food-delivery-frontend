import { createSlice } from "@reduxjs/toolkit";
import { Review } from "src/models/reviews.interfaces";

interface MenuItemReviewsState {
    isLoading: boolean
    reviews: Review[],
    error?: string | undefined | null
}

const initialState: MenuItemReviewsState = {
    isLoading: false,
    reviews: [],
    error: null
}

const menuItemReviewsSlice = createSlice({
    name: 'menuItemReviews',
    initialState,
    reducers: {
       
    }
})

export default menuItemReviewsSlice.reducer;