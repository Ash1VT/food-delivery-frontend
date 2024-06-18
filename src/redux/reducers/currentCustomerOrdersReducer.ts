import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"
import { addOrderReview, createOrder, fetchCurrentCustomerOrders } from "../actions/currentCustomerOrders.actions"

interface CurrentCustomerOrdersState {
    isLoading: boolean
    orders: Order[]
    error?: string | undefined | null
}

const initialState: CurrentCustomerOrdersState = {
    isLoading: false,
    orders: [],
    error: null
}

const currentCustomerOrdersSlice = createSlice({
    name: 'currentCustomerOrders',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Current Customer Orders

        builder.addCase(fetchCurrentCustomerOrders.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentCustomerOrders.fulfilled, (state, action) => {
            state.isLoading = false
            state.orders = action.payload
            state.error = null
        })

        builder.addCase(fetchCurrentCustomerOrders.rejected, (state, action) => {
            state.isLoading = false
            state.orders = []
            state.error = action.error.message
        })

        // Add Order Review

        builder.addCase(addOrderReview.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(addOrderReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const order = state.orders.find(order => order.id === action.payload.orderId)
            if (order) order.review = action.payload
        })

        builder.addCase(addOrderReview.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create Order

        builder.addCase(createOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
        })

        builder.addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default currentCustomerOrdersSlice.reducer;