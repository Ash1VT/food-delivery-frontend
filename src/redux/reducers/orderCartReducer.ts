import { createSlice } from "@reduxjs/toolkit";
import { addOrderCartItemToLocalStorage, getOrderCartItemsFromLocalStorage, removeOrderCartItemFromLocalStorage } from "src/components/order-cart/utils/localStorage";
import { OrderCartItem } from "src/models/orderCartItem.interfaces";
import { OrderItem } from "src/models/orderItem.interfaces";

interface OrderCartState {
    orderCartItems: OrderCartItem[]
}

const initialState: OrderCartState = {
    orderCartItems: []
}

const orderCartSlice = createSlice({
    name: 'orderCart',
    initialState,
    reducers: {
        addOrderCartItem(state, action) {
            state.orderCartItems.push(action.payload)
            addOrderCartItemToLocalStorage(action.payload)
        },

        removeOrderCartItem(state, action) {
            state.orderCartItems = state.orderCartItems.filter(item => item.id !== action.payload)
            removeOrderCartItemFromLocalStorage(action.payload)
        },
        fetchOrderCartItemsFromLocalStorage(state) {
            const orderCartItems = getOrderCartItemsFromLocalStorage()
            state.orderCartItems = orderCartItems
        },

        setOrderCartItemQuantity(state, action) {
            const orderCartItemId = state.orderCartItems.findIndex(item => item.id === action.payload.id)
            state.orderCartItems[orderCartItemId].quantity = action.payload.quantity
        }
    }
})

export default orderCartSlice.reducer;
export const { addOrderCartItem, removeOrderCartItem, fetchOrderCartItemsFromLocalStorage, setOrderCartItemQuantity } = orderCartSlice.actions