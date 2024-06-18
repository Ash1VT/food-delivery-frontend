import { createAsyncThunk } from "@reduxjs/toolkit"
import { Review, ReviewCreate, ReviewUpdate } from "src/models/reviews.interfaces"
import { ReviewService } from "src/services/ReviewService"


export const fetchCurrentCustomerRestaurantReview = createAsyncThunk<Review, string, { rejectValue: string }>(
    'restaurantReviews/fetchCurrentCustomerRestaurantReview',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await ReviewService.getCurrentCustomerRestaurantReview(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const createRestaurantReview = createAsyncThunk<Review, ReviewCreate, { rejectValue: string }>(
    'restaurantReviews/createRestaurantReview',
    async (data: ReviewCreate, { rejectWithValue }) => {
        try {
            return await ReviewService.addRestaurantReview(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateRestaurantReview = createAsyncThunk<Review, ReviewUpdate, { rejectValue: string }>(
    'restaurantReviews/updateRestaurantReview',
    async (data: ReviewUpdate, { rejectWithValue }) => {
        try {
            return await ReviewService.updateReview(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const deleteRestaurantReview = createAsyncThunk<string, string, { rejectValue: string }>(
    'restaurantReviews/deleteRestaurantReview',
    async (reviewId: string, { rejectWithValue }) => {
        try {
            await ReviewService.deleteReview(reviewId)
            return reviewId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)