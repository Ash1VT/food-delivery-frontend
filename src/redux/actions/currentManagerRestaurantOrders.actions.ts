import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "src/models/order.interfaces";
import { OrderService } from "src/services/OrderService";

export const fetchCurrentManagerRestaurantOrders = createAsyncThunk<Order[], string, { rejectValue: string }>(
    'currentManagerRestaurantOrders/fetchCurrentManagerRestaurantOrders',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await OrderService.getRestaurantOrders(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const confirmOrder = createAsyncThunk<string, string, { rejectValue: string }>(
    'currentManagerRestaurantOrders/confirmOrder',
    async (orderId: string, { rejectWithValue }) => {
        try {
            await OrderService.confirmOrder(orderId)
            return orderId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')

            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const prepareOrder = createAsyncThunk<string, string, { rejectValue: string }>(
    'currentManagerRestaurantOrders/prepareOrder',
    async (orderId: string, { rejectWithValue }) => {
        try {
            await OrderService.prepareOrder(orderId)
            return orderId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')

            }

            return rejectWithValue(error.response.data.detail)

        }
    }
)