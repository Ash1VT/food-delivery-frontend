import { createAsyncThunk } from "@reduxjs/toolkit"
import { MenuItem } from "src/models/menuItem.interfaces"
import { Restaurant } from "src/models/restaurant.interfaces"
import { Review, ReviewCreate, ReviewUpdate } from "src/models/reviews.interfaces"
import { MenuItemService } from "src/services/MenuItemService"
import { RestaurantService } from "src/services/RestaurantService"
import { ReviewService } from "src/services/ReviewService"

export const fetchRestaurant = createAsyncThunk<Restaurant, string, { rejectValue: string }>(
    'menuItemReviews/fetchRestaurant',
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

export const fetchMenuItem = createAsyncThunk<MenuItem, string, { rejectValue: string }>(
    'menuItemReviews/fetchMenuItem',
    async (menuItemId: string, { rejectWithValue }) => {
        try {
            return await MenuItemService.getMenuItem(menuItemId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)


export const fetchMenuItemReviews = createAsyncThunk<Review[], string, { rejectValue: string }>(
    'menuItemReviews/fetchMenuItemReviews',
    async (menuItemId: string, { rejectWithValue }) => {
        try {
            return await ReviewService.getMenuItemReviews(menuItemId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)