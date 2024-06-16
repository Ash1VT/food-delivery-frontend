import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"
import { fetchOrder, placeOrder, updateOrder, updateOrderItem } from "../actions/orderPlacing.actions"

interface OrderPlacingState {
    isLoading: boolean
    order?: Order | undefined | null
    error?: string | undefined | null
}

const initialState: OrderPlacingState = {
    isLoading: false,
    order: null,
    error: null
}

export const orderPlacingSlice = createSlice({
    name: 'orderPlacing',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Fetch Order

        builder.addCase(fetchOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.order = action.payload
        })

        builder.addCase(fetchOrder.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Order

        builder.addCase(updateOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.order = action.payload
        })

        builder.addCase(updateOrder.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Order Item

        builder.addCase(updateOrderItem.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateOrderItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            if (state.order) state.order.items = state.order.items.map(item => item.id === action.payload.id ? action.payload : item)
        })

        builder.addCase(updateOrderItem.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Place Order

        builder.addCase(placeOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(placeOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
        })

        builder.addCase(placeOrder.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }
})

export default orderPlacingSlice.reducer