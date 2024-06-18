import { createAsyncThunk } from "@reduxjs/toolkit"
import { Review, ReviewCreate, ReviewUpdate } from "src/models/reviews.interfaces"
import { ReviewService } from "src/services/ReviewService"


export const fetchCurrentCustomerMenuItemReview = createAsyncThunk<Review, string, { rejectValue: string }>(
    'menuItemReviews/fetchCurrentCustomerMenuItemReview',
    async (menuItemId: string, { rejectWithValue }) => {
        try {
            return await ReviewService.getCurrentCustomerMenuItemReview(menuItemId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const createMenuItemReview = createAsyncThunk<Review, ReviewCreate, { rejectValue: string }>(
    'menuItemReviews/createMenuItemReview',
    async (data: ReviewCreate, { rejectWithValue }) => {
        try {
            return await ReviewService.addMenuItemReview(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateMenuItemReview = createAsyncThunk<Review, ReviewUpdate, { rejectValue: string }>(
    'menuItemReviews/updateMenuItemReview',
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

export const deleteMenuItemReview = createAsyncThunk<string, string, { rejectValue: string }>(
    'menuItemReviews/deleteMenuItemReview',
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