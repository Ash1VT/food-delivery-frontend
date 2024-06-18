import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"
import { fetchCurrentCourierOrders, finishOrderDelivery } from "../actions/currentCourierOrders.actions"

interface CurrentCourierOrdersState {
    isLoading: boolean
    orders: Order[]
    error?: string | undefined | null
}

const initialState: CurrentCourierOrdersState = {
    isLoading: false,
    orders: [],
    error: null
}

const currentCourierOrdersSlice = createSlice({
    name: 'currentCourierOrders',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Current Courier Orders

        builder.addCase(fetchCurrentCourierOrders.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentCourierOrders.fulfilled, (state, action) => {
            state.isLoading = false
            state.orders = action.payload
            state.error = null
        })

        builder.addCase(fetchCurrentCourierOrders.rejected, (state, action) => {
            state.isLoading = false
            state.orders = []
            state.error = action.error.message
        })

        // Finish Order Delivery

        builder.addCase(finishOrderDelivery.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(finishOrderDelivery.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null

            const order = state.orders.find(order => order.id === action.payload)
            if (order) order.status = 'delivered'
        })

        builder.addCase(finishOrderDelivery.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }

})

export default currentCourierOrdersSlice.reducer;