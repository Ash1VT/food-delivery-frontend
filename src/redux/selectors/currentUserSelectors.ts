import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const getMenuItemCurrentUserReview = createSelector(
    [(state: RootState) => state.menuItemReviewsReducer.reviews, (state: RootState) => state.currentUserReducer.currentUser],
    (reviews, currentUser) => {
        if (!currentUser) return null

        return reviews.find((review) => review.customerId === currentUser.id)
    }
)

export const getRestaurantCurrentUserReview = createSelector(
    [(state: RootState) => state.restaurantReviewsReducer.reviews, (state: RootState) => state.currentUserReducer.currentUser],
    (reviews, currentUser) => {
        if (!currentUser) return null

        return reviews.find((review) => review.customerId === currentUser.id)
    }
)
