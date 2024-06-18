import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "src/models/restaurant.interfaces";
import { Review } from "src/models/reviews.interfaces";
import { fetchMenuItem, fetchMenuItemReviews, fetchRestaurant } from "../actions/menuItemReviews.actions";
import { MenuItem } from "src/models/menuItem.interfaces";

interface MenuItemReviewsState {
    isRestaurantLoading: boolean
    isMenuItemLoading: boolean
    isReviewsLoading: boolean
    restaurant?: Restaurant | undefined | null
    menuItem?: MenuItem | undefined | null
    reviews: Review[],
    restaurantError?: string | undefined | null
    menuItemError?: string | undefined | null
    reviewsError?: string | undefined | null
}

const initialState: MenuItemReviewsState = {
    isRestaurantLoading: false,
    isMenuItemLoading: false,
    isReviewsLoading: false,
    restaurant: null,
    reviews: [],
    menuItem: null,
    restaurantError: null,
    reviewsError: null,
    menuItemError: null
}

const menuItemReviewsSlice = createSlice({
    name: 'menuItemReviews',
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
            state.restaurantError = null
            state.restaurant = action.payload
        })

        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.isRestaurantLoading = false
            state.restaurantError = action.error.message
        })

        // Fetch Menu Item

        builder.addCase(fetchMenuItem.pending, (state) => {
            state.isMenuItemLoading = true
        })

        builder.addCase(fetchMenuItem.fulfilled, (state, action) => {
            state.isMenuItemLoading = false
            state.menuItemError = null
            state.menuItem = action.payload
        })

        builder.addCase(fetchMenuItem.rejected, (state, action) => {
            state.isMenuItemLoading = false
            state.menuItemError = action.error.message
        })
        
        // Fetch Menu Item Reviews

        builder.addCase(fetchMenuItemReviews.pending, (state) => {
            state.isReviewsLoading = true
        })

        builder.addCase(fetchMenuItemReviews.fulfilled, (state, action) => {
            state.isReviewsLoading = false
            state.reviews = action.payload
            state.reviewsError = null
        })

        builder.addCase(fetchMenuItemReviews.rejected, (state, action) => {
            state.isReviewsLoading = false
            state.reviewsError = action.error.message
        })
    }
})

export default menuItemReviewsSlice.reducer;