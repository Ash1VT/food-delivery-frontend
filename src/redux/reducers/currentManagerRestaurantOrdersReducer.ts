import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"
import { confirmOrder, fetchCurrentManagerRestaurantOrders, prepareOrder } from "../actions/currentManagerRestaurantOrders.actions"

interface CurrentManagerRestaurantOrdersState {
    isLoading: boolean
    orders: Order[]
    error?: string | undefined | null
}

const initialState: CurrentManagerRestaurantOrdersState = {
    isLoading: false,
    orders: [],
    error: null
}

const currentManagerRestaurantOrdersSlice = createSlice({
    name: 'currentManagerRestaurantOrders',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Current Manager Restaurant Orders

        builder.addCase(fetchCurrentManagerRestaurantOrders.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentManagerRestaurantOrders.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.orders = action.payload
        })

        builder.addCase(fetchCurrentManagerRestaurantOrders.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Confirm Order

        builder.addCase(confirmOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(confirmOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const order = state.orders.find(order => order.id === action.payload)
            if (order) order.status = 'confirmed'
        })

        builder.addCase(confirmOrder.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Prepare Order

        builder.addCase(prepareOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(prepareOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.orders = state.orders.filter(order => order.id !== action.payload)
        })

        builder.addCase(prepareOrder.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }
})

export default currentManagerRestaurantOrdersSlice.reducer;