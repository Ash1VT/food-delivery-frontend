import { createAsyncThunk } from "@reduxjs/toolkit"
import { Restaurant } from "src/models/restaurant.interfaces"
import { Review, ReviewCreate, ReviewUpdate } from "src/models/reviews.interfaces"
import { RestaurantService } from "src/services/RestaurantService"
import { ReviewService } from "src/services/ReviewService"

export const fetchRestaurant = createAsyncThunk<Restaurant, string, { rejectValue: string }>(
    'restaurantReviews/fetchRestaurant',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await RestaurantService.getRestaurant(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)


export const fetchRestaurantReviews = createAsyncThunk<any, string, { rejectValue: string }>(
    'restaurantReviews/fetchRestaurantReviews',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await ReviewService.getRestaurantReviews(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)