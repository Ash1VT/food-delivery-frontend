import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "src/models/order.interfaces";
import { OrderService } from "src/services/OrderService";

export const fetchCurrentCourierOrders = createAsyncThunk<Order[], void, { rejectValue: string }>(
    'currentCourierOrders/fetchCurrentCourierOrders',
    async (_, { rejectWithValue }) => {
        try {
            return await OrderService.getCurrentCourierOrders()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const finishOrderDelivery = createAsyncThunk<string, string, { rejectValue: string }>(
    'currentCourierOrders/finishOrderDelivery',
    async (orderId: string, { rejectWithValue }) => {
        try {
            await OrderService.finishOrderDelivery(orderId)
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

