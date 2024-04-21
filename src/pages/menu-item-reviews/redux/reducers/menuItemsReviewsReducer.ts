import { createSlice } from "@reduxjs/toolkit";
import IMenuItemReview from "../models/IMenuItemReview";

interface MenuItemReviewsState {
    menuItemReviews: IMenuItemReview[]
}

const initialState: MenuItemReviewsState = {
    menuItemReviews: [
        {
            id: '1',
            userFullName: 'Test User',
            userImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            userId: '1',
            menuItemId: '1',
            ratingValue: 5,
            text: 'eqeqeqeqeqeqeqeqeqe qeqeqeqeqeqeqeqeqeqeqeqeqeqeqeqeqeqeqe qeqeqeqeqeqeqeqeqeqeqeqeqeq eqeqeqeqeqeqeqeqeqeqeqeqe qeqeqeqeqeq eqeqeqeqeqeqeqeq'
        },
        {
            id: '2',
            userFullName: 'John Doe',
            userImageUrl: 'images/',
            userId: '2',
            menuItemId: '1',
            ratingValue: 5,
        },
        {
            id: '3',
            userFullName: 'John Doe',
            userImageUrl: 'images/',
            menuItemId: '1',
            userId: '3',
            ratingValue: 5,
            text: 'eqeq'
        }
    ]
}

const menuItemReviewsSlice = createSlice({
    name: 'menuItemReviews',
    initialState,
    reducers: {
        addReview(state, action) {
            const lastId = state.menuItemReviews[state.menuItemReviews.length - 1].id
            state.menuItemReviews.push({
                id: lastId + 1,
                ...action.payload
            })
        },
        updateReview(state, action) {
            const review = state.menuItemReviews.find((review) => review.id === action.payload.id)

            if (review) {
                review.ratingValue = action.payload.ratingValue
                review.text = action.payload.text
            }
        },
        deleteReview(state, action) {
            state.menuItemReviews = state.menuItemReviews.filter((review) => review.id !== action.payload.id)
        }
    }
})

export default menuItemReviewsSlice.reducer;
export const { addReview, updateReview, deleteReview } = menuItemReviewsSlice.actions