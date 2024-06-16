import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order, OrderTake } from "src/models/order.interfaces";
import { OrderService } from "src/services/OrderService";

export const fetchAvailableOrders = createAsyncThunk<Order[], void, { rejectValue: string }>(
    'availableOrders/fetchAvailableOrders',
    async (_, { rejectWithValue }) => {
        try {
            return await OrderService.getAvailableOrders()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const takeOrder = createAsyncThunk<string, OrderTake, { rejectValue: string }>(
    'availableOrders/takeOrder',
    async (data: OrderTake, { rejectWithValue }) => {
        try {
            await OrderService.takeOrder(data)
            return data.id
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)