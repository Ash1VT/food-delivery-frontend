import { createSlice } from "@reduxjs/toolkit";
import IRestaurantReview from "../models/IRestaurantReview";

interface RestaurantReviewsState {
    restaurantReviews: IRestaurantReview[]
}

const initialState: RestaurantReviewsState = {
    restaurantReviews: [
        {
            "id": "1",
            "userFullName": "Sarah Johnson",
            "userImageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "userId": "1",
            "restaurantId": "1",
            "ratingValue": 4,
            "text": "The food was delicious and the service was excellent. Will definitely come back!"
        },
        {
            "id": "2",
            "userFullName": "David Smith",
            "userImageUrl": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            "userId": "2",
            "restaurantId": "1",
            "ratingValue": 5,
            "text": "This restaurant exceeded my expectations! The ambiance, food quality, and service were outstanding."
        },
        {
            "id": "3",
            "userFullName": "Emily Wilson",
            "userImageUrl": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            "userId": "3",
            "restaurantId": "1",
            "ratingValue": 5,
            "text": "Had a wonderful dining experience here. The dishes were flavorful and the staff was friendly."
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