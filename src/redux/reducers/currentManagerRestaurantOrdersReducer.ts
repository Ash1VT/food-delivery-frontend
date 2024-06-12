import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"

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
       
    }
})

export default currentManagerRestaurantOrdersSlice.reducer;