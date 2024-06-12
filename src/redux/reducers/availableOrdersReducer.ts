import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"

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
       
    }
})

export default availableOrdersSlice.reducer;