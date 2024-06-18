import { createSlice } from "@reduxjs/toolkit";
import { addOrderCartItemToLocalStorage, clearOrderCartFromLocalStorage, getOrderCartItemsFromLocalStorage, removeOrderCartItemFromLocalStorage, setOrderCartItemQuantityInLocalStorage } from "src/components/order-cart/utils/localStorage";
import { OrderCartItem } from "src/models/orderCartItem.interfaces";
import { OrderItem } from "src/models/orderItem.interfaces";

interface OrderCartState {
    restaurantId?: string | undefined | null
    orderCartItems: OrderCartItem[]
}

const initialState: OrderCartState = {
    restaurantId: null,
    orderCartItems: []
}

const orderCartSlice = createSlice({
    name: 'orderCart',
    initialState,
    reducers: {
        addOrderCartItem(state, action) {
            state.orderCartItems.push(action.payload)
            state.restaurantId = action.payload.restaurantId
            addOrderCartItemToLocalStorage(action.payload)
        },
        removeOrderCartItem(state, action) {
            state.orderCartItems = state.orderCartItems.filter(item => item.id !== action.payload)
            removeOrderCartItemFromLocalStorage(action.payload)
            if (state.orderCartItems.length === 0) state.restaurantId = null
        },
        fetchOrderCartItemsFromLocalStorage(state) {
            const orderCartItems = getOrderCartItemsFromLocalStorage()
            console.log(orderCartItems)
            if (orderCartItems.length !== 0) state.restaurantId = orderCartItems[0].restaurantId
            state.orderCartItems = orderCartItems
        },
        setOrderCartItemQuantity(state, action) {
            const orderCartItem = state.orderCartItems.find(item => item.id === action.payload.id)
            if (orderCartItem) {
                orderCartItem.quantity = action.payload.quantity
                setOrderCartItemQuantityInLocalStorage(orderCartItem.id, action.payload.quantity)
            }
        },
        clearOrderCart(state) {
            state.orderCartItems = []
            state.restaurantId = null
            clearOrderCartFromLocalStorage()
        }
    }
})

export default orderCartSlice.reducer;
export const { addOrderCartItem, removeOrderCartItem, fetchOrderCartItemsFromLocalStorage, setOrderCartItemQuantity, clearOrderCart } = orderCartSlice.actions