import { createSlice } from "@reduxjs/toolkit";
import IMenuItemReview from "../models/IMenuItemReview";

interface MenuItemReviewsState {
    menuItemReviews: IMenuItemReview[]
}

const initialState: MenuItemReviewsState = {
    menuItemReviews: [
        {
            "id": "1",
            "userFullName": "Alex Smith",
            "userImageUrl": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            "userId": "1",
            "menuItemId": "1",
            "ratingValue": 4,
            "text": "The food was delicious! Highly recommend the pizza."
        },
        {
            "id": "2",
            "userFullName": "Emma Johnson",
            "userImageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "userId": "2",
            "menuItemId": "1",
            "ratingValue": 5,
            "text": "Absolutely loved the ambiance and the service. Will definitely visit again!"
        },
        {
            "id": "3",
            "userFullName": "Michael Brown",
            "userImageUrl": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            "userId": "3",
            "menuItemId": "1",
            "ratingValue": 3,
            "text": "The food was decent, but the portion sizes were small for the price."
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