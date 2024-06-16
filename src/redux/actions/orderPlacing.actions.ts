import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order, OrderUpdate } from "src/models/order.interfaces";
import { OrderItem, OrderItemUpdate } from "src/models/orderItem.interfaces";
import { OrderItemService } from "src/services/OrderItemService";
import { OrderService } from "src/services/OrderService";

export const fetchOrder = createAsyncThunk<Order, string, { rejectValue: string }>(
    'orderPlacing/fetchOrder',
    async (orderId: string, { rejectWithValue }) => {
        try {
            return await OrderService.getOrder(orderId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.message)
        }
    }
)


export const updateOrder = createAsyncThunk<Order, OrderUpdate, { rejectValue: string }>(
    'orderPlacing/updateOrder',
    async (order: OrderUpdate, { rejectWithValue }) => {
        try {
            return await OrderService.updateOrder(order)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.message)
        }
    }
)

export const updateOrderItem = createAsyncThunk<OrderItem, OrderItemUpdate, { rejectValue: string }>(
    'orderPlacing/updateOrderItem',
    async (order: OrderItemUpdate, { rejectWithValue }) => {
        try {
            return await OrderItemService.updateOrderItem(order)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.message)
        }
    }
)

export const placeOrder = createAsyncThunk<string, string, { rejectValue: string }>(
    'orderPlacing/placeOrder',
    async (orderId: string, { rejectWithValue }) => {
        try {
            await OrderService.placeOrder(orderId)
            return orderId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.message)
        }
    }
)