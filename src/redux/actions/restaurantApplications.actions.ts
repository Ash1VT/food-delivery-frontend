import { createAsyncThunk } from "@reduxjs/toolkit";
import { RestaurantApplication, RestaurantApplicationUpdate } from "src/models/restaurantApplication.interfaces";
import { RestaurantApplicationService } from "src/services/RestaurantApplicationService";

export const fetchRestaurantsApplications = createAsyncThunk<RestaurantApplication[], void, { rejectValue: string }>(
    'restaurantApplications/fetchRestaurantsApplications',
    async (_, { rejectWithValue }) => {
        try {
            return await RestaurantApplicationService.getRestaurantsApplications()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateRestaurantApplication = createAsyncThunk<RestaurantApplication, RestaurantApplicationUpdate, { rejectValue: string }>(
    'restaurantApplications/updateRestaurantApplication',
    async (data: RestaurantApplicationUpdate, { rejectWithValue }) => {
        try {
            return await RestaurantApplicationService.updateRestaurantApplication(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const confirmRestaurantApplication = createAsyncThunk<string, string, { rejectValue: string }>(
    'restaurantApplications/confirmRestaurantApplication',
    async (applicationId: string, { rejectWithValue }) => {
        try {
            await RestaurantApplicationService.confirmRestaurantApplication(applicationId)
            return applicationId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const declineRestaurantApplication = createAsyncThunk<string, string, { rejectValue: string }>(
    'restaurantApplications/declineRestaurantApplication',
    async (applicationId: string, { rejectWithValue }) => {
        try {
            await RestaurantApplicationService.declineRestaurantApplication(applicationId)
            return applicationId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)