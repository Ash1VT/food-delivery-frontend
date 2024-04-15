import { createSlice } from "@reduxjs/toolkit";
import IRestaurantReview from "../models/IRestaurantReview";

interface RestaurantReviewsState {
    restaurantReviews: IRestaurantReview[]
}

const initialState: RestaurantReviewsState = {
    restaurantReviews: [
        {
            id: '1',
            userFullName: 'Test User',
            userImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            userId: '1',
            restaurantId: '1',
            ratingValue: 5,
            text: 'eqeqeqeqeqeqeqeqeqe qeqeqeqeqeqeqeqeqeqeqeqeqeqeqeqeqeqeqe qeqeqeqeqeqeqeqeqeqeqeqeqeq eqeqeqeqeqeqeqeqeqeqeqeqe qeqeqeqeqeq eqeqeqeqeqeqeqeq'
        },
        {
            id: '2',
            userFullName: 'John Doe',
            userImageUrl: 'images/',
            userId: '2',
            restaurantId: '1',
            ratingValue: 5,
        },
        {
            id: '3',
            userFullName: 'John Doe',
            userImageUrl: 'images/',
            restaurantId: '1',
            userId: '3',
            ratingValue: 5,
            text: 'eqeq'
        }
    ]
}

const restaurantReviewsSlice = createSlice({
    name: 'restaurantReviews',
    initialState,
    reducers: {
        addReview(state, action) {
            const lastId = state.restaurantReviews[state.restaurantReviews.length - 1].id
            state.restaurantReviews.push({
                id: lastId + 1,
                ...action.payload
            })
        },
        updateReview(state, action) {
            const review = state.restaurantReviews.find((review) => review.id === action.payload.id)

            if (review) {
                review.ratingValue = action.payload.ratingValue
                review.text = action.payload.text
            }
        },
        deleteReview(state, action) {
            state.restaurantReviews = state.restaurantReviews.filter((review) => review.id !== action.payload.id)
        }
    }
})

export default restaurantReviewsSlice.reducer;
export const { addReview, updateReview, deleteReview } = restaurantReviewsSlice.actions