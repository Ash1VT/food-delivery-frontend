import { createAsyncThunk } from "@reduxjs/toolkit";
import { Review } from "src/models/reviews.interfaces";
import { ReviewService } from "src/services/ReviewService";

export const fetchCourierReviews = createAsyncThunk<Review[], string, { rejectValue: string }>(
    'currentCourierReviews/fetchCourierReviews',
    async (courierId: string, { rejectWithValue }) => {
        try {
            return await ReviewService.getCourierReviews(courierId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)