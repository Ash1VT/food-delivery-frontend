import { createSelector } from "@reduxjs/toolkit";
import { getCurrentUser } from "src/redux/selectors";
import { RootState } from "src/store/store";

export const getMenuItemReviews = (state: RootState) => state.menuItemsReviewsReducer.menuItemReviews

export const getMenuItemCurrentUserReview = createSelector(
    [getMenuItemReviews, getCurrentUser],
    (menuItemReviews, currentUser) => {
        if (!currentUser) return null

        return menuItemReviews.find((review) => review.userId === currentUser.id)
    }
)
