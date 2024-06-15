import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourierRating } from "src/models/courierRating,interfaces";
import { ReviewService } from "src/services/ReviewService";

export const fetchCourierRating = createAsyncThunk<CourierRating, string, { rejectValue: string }>(
    'currentCourierRating/fetchCourierRating',
    async (courierId: string, { rejectWithValue }) => {
        try {
            return await ReviewService.getCourierRating(courierId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)