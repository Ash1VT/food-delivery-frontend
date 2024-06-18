import { createAsyncThunk } from "@reduxjs/toolkit"
import { Restaurant, RestaurantCreate, RestaurantsList, RestaurantsListRequestData } from "src/models/restaurant.interfaces"
import { RestaurantApplication } from "src/models/restaurantApplication.interfaces"
import { RestaurantService } from "src/services/RestaurantService"

export const fetchRestaurantsPage = createAsyncThunk<RestaurantsList, RestaurantsListRequestData, { rejectValue: string }>(
    'restaurants/fetchRestaurantsPage',
    async (data: RestaurantsListRequestData, { rejectWithValue }) => {
        try {
            return await RestaurantService.getRestaurantsPage(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)