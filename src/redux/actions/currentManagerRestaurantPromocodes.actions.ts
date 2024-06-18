import { createAsyncThunk } from "@reduxjs/toolkit";
import { Promocode, PromocodeCreate, PromocodeUpdate } from "src/models/promocode.interfaces";
import { PromocodeService } from "src/services/PromocodeService";

export const fetchCurrentManagerRestaurantPromocodes = createAsyncThunk<Promocode[], string, { rejectValue: string }>(
    'currentManagerRestaurantPromocodes/fetchCurrentManagerRestaurantPromocodes',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await PromocodeService.getRestaurantPromocodes(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const createPromocode = createAsyncThunk<Promocode, PromocodeCreate, { rejectValue: string }>(
    'currentManagerRestaurantPromocodes/createPromocode',
    async (data: PromocodeCreate, { rejectWithValue }) => {
        try {
            return await PromocodeService.createPromocode(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updatePromocode = createAsyncThunk<Promocode, PromocodeUpdate, { rejectValue: string }>(
    'currentManagerRestaurantPromocodes/updatePromocode',
    async (data: PromocodeUpdate, { rejectWithValue }) => {
        try {
            return await PromocodeService.updatePromocode(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)

        }
    }
)

export const activatePromocode = createAsyncThunk<string, string, { rejectValue: string }>(
    'currentManagerRestaurantPromocodes/activatePromocode',
    async (promocodeId: string, { rejectWithValue }) => {
        try {
            await PromocodeService.activatePromocode(promocodeId)
            return promocodeId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)

        }
    }
)

export const deactivatePromocode = createAsyncThunk<string, string, { rejectValue: string }>(
    'currentManagerRestaurantPromocodes/deactivatePromocode',
    async (promocodeId: string, { rejectWithValue }) => {
        try {
            await PromocodeService.deactivatePromocode(promocodeId)
            return promocodeId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)