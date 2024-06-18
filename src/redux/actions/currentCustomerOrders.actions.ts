import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order, OrderCreate } from "src/models/order.interfaces";
import { Review, ReviewCreate } from "src/models/reviews.interfaces";
import { OrderService } from "src/services/OrderService";
import { ReviewService } from "src/services/ReviewService";

export const fetchCurrentCustomerOrders = createAsyncThunk<Order[], void, { rejectValue: string }>(
    'currentCustomerOrders/fetchCurrentCustomerOrders',
    async (_, { rejectWithValue }) => {
        try {
            return await OrderService.getCurrentCustomerOrders()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const addOrderReview = createAsyncThunk<Review, ReviewCreate, { rejectValue: string }>(
    'currentCustomerOrders/addOrderReview',
    async (data: ReviewCreate, { rejectWithValue }) => {
        try {
            return await ReviewService.addOrderReview(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const createOrder = createAsyncThunk<Order, OrderCreate, { rejectValue: string }>(
    'currentCustomerOrders/createOrder',
    async (data: OrderCreate, { rejectWithValue }) => {
        try {
            return await OrderService.createOrder(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
    
)