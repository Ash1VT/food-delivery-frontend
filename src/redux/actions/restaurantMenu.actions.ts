import { createAsyncThunk } from "@reduxjs/toolkit"
import { Menu } from "src/models/menu.interfaces"
import { Restaurant } from "src/models/restaurant.interfaces"
import { MenuService } from "src/services/MenuService"
import { RestaurantService } from "src/services/RestaurantService"


export const fetchRestaurant = createAsyncThunk<Restaurant, string, { rejectValue: string }>(
    'restaurantMenu/fetchRestaurant',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await RestaurantService.getRestaurant(restaurantId)
        }
        catch (error: any) {
            console.log(error)
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const fetchRestaurantMenu = createAsyncThunk<Menu | undefined | null, string, { rejectValue: string }>(
    'restaurantMenu/fetchRestaurantMenu',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await MenuService.getRestaurantCurrentMenu(restaurantId)
        }
        catch (error: any) {
            console.log(error)
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

