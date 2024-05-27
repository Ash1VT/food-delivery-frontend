import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCurrentUser } from "./currentUserSelectors";

export const getRestaurantReviews = (state: RootState) => state.restaurantReviewsReducer.restaurantReviews

export const getRestaurantCurrentUserReview = createSelector(
    [getRestaurantReviews, getCurrentUser],
    (restaurantReviews, currentUser) => {
        if (!currentUser) return null

        return restaurantReviews.find((review) => review.userId === currentUser.id)
    }
)
