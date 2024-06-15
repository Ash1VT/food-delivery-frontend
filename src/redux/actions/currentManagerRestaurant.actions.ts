import { createAsyncThunk } from "@reduxjs/toolkit"
import { Restaurant, RestaurantUpdate, RestaurantUpdateResponse, RestaurantUploadImage } from "src/models/restaurant.interfaces"
import { RestaurantApplication } from "src/models/restaurantApplication.interfaces"
import { WorkingHours, WorkingHoursCreate, WorkingHoursUpdate } from "src/models/workingHours.interfaces"
import { RestaurantService } from "src/services/RestaurantService"
import { WorkingHoursService } from "src/services/WorkingHoursService"

export const fetchCurrentManagerRestaurant = createAsyncThunk<Restaurant | null, void, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurant/fetchCurrentManagerRestaurant',
    async (_, { rejectWithValue }) => {
        try {
            return await RestaurantService.getCurrentManagerRestaurant()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const uploadRestaurantImage = createAsyncThunk<RestaurantUpdateResponse, RestaurantUploadImage, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurant/uploadRestaurantImage',
    async (data: RestaurantUploadImage, { rejectWithValue }) => {
        try {
            return await RestaurantService.uploadRestaurantImage(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const activateRestaurant = createAsyncThunk<RestaurantUpdateResponse, string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurant/activateRestaurant',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await RestaurantService.activateRestaurant(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)


export const deactivateRestaurant = createAsyncThunk<RestaurantUpdateResponse, string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurant/deactivateRestaurant',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await RestaurantService.deactivateRestaurant(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const createRestaurantWorkingHours = createAsyncThunk<WorkingHours, WorkingHoursCreate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurant/createRestaurantWorkingHours',
    async (data: WorkingHoursCreate, { rejectWithValue }) => {
        try {
            return await WorkingHoursService.createWorkingHours(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateRestaurantWorkingHours = createAsyncThunk<WorkingHours, WorkingHoursUpdate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurant/updateRestaurantWorkingHours',
    async (data: WorkingHoursUpdate, { rejectWithValue }) => {
        try {
            return await WorkingHoursService.updateWorkingHours(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const deleteRestaurantWorkingHours = createAsyncThunk<string, string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurant/deleteRestaurantWorkingHours',
    async (workingHoursId: string, { rejectWithValue }) => {
        try {
            await WorkingHoursService.deleteWorkingHours(workingHoursId)
            return workingHoursId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)