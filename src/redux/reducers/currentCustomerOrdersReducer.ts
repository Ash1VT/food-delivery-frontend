import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"

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
       
    }
})

export default currentCustomerOrdersSlice.reducer;