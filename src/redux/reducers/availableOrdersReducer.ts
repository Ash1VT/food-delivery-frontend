import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"
import { fetchAvailableOrders, takeOrder } from "../actions/availableOrders.actions"

interface AvailableOrdersState {
    isLoading: boolean
    orders: Order[]
    error?: string | undefined | null
}

const initialState: AvailableOrdersState = {
    isLoading: false,
    orders: [],
    error: null
}

const availableOrdersSlice = createSlice({
    name: 'availableOrders',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Available Orders

        builder.addCase(fetchAvailableOrders.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchAvailableOrders.fulfilled, (state, action) => {
            state.isLoading = false
            state.orders = action.payload
            state.error = null
        })
        
        builder.addCase(fetchAvailableOrders.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Take Order

        builder.addCase(takeOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(takeOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.orders = state.orders.filter(order => order.id !== action.payload)
            state.error = null
        })
        
        builder.addCase(takeOrder.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default availableOrdersSlice.reducer;