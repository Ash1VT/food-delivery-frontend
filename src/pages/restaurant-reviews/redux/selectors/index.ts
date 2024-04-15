import { createSelector } from "@reduxjs/toolkit";
import { getCurrentUser } from "src/redux/selectors";
import { RootState } from "src/store/store";

export const getRestaurantReviews = (state: RootState) => state.restaurantReviewsReducer.restaurantReviews

export const getRestaurantCurrentUserReview = createSelector(
    [getRestaurantReviews, getCurrentUser],
    (restaurantReviews, currentUser) => {
        if (!currentUser) return null

        return restaurantReviews.find((review) => review.userId === currentUser.id)
    }
)
