import { createAsyncThunk } from "@reduxjs/toolkit";
import { RestaurantCreate, RestaurantUpdate } from "src/models/restaurant.interfaces";
import { RestaurantApplication } from "src/models/restaurantApplication.interfaces";
import { RestaurantApplicationService } from "src/services/RestaurantApplicationService";
import { RestaurantService } from "src/services/RestaurantService";

export const fetchCurrentManagerRestaurantApplications = createAsyncThunk<RestaurantApplication[], void, { rejectValue: string }>(
    'currentManagerRestaurantApplications/fetchCurrentManagerRestaurantApplications',
    async (_, { rejectWithValue }) => {
        try {
            return await RestaurantApplicationService.getCurrentRestaurantApplications()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const createRestaurant = createAsyncThunk<RestaurantApplication, RestaurantCreate, { rejectValue: string }>(
    'currentManagerRestaurantApplications/createRestaurant',
    async (data: RestaurantCreate, { rejectWithValue }) => {
        try {
            return await RestaurantService.createRestaurant(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateRestaurant = createAsyncThunk<RestaurantApplication, RestaurantUpdate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantApplications/updateRestaurant',
    async (data: RestaurantUpdate, { rejectWithValue }) => {
        try {
            return await RestaurantService.updateRestaurant(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            if (error.response.status === 400) {
                return rejectWithValue(error.response.data.detail)
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)