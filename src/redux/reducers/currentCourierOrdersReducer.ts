import { createSlice } from "@reduxjs/toolkit"
import { Order } from "src/models/order.interfaces"

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
       
    }
})

export default currentCourierOrdersSlice.reducer;