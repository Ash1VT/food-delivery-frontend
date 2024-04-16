import { createSlice } from "@reduxjs/toolkit";
import IOrderCartItem from "../models/IOrderCartItem";
import { addOrderCartItemToLocalStorage, getOrderCartItemsFromLocalStorage, removeOrderCartItemFromLocalStorage, setOrderCartItemQuantityInLocalStorage } from "../../utils/localStorage";

interface OrderCartState {
    orderCartItems: IOrderCartItem[]
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
            // Создаем новый массив элементов заказа с обновленным количеством
            // const updatedOrderCartItems = state.orderCartItems.map(item => {
            //     // Если найден элемент с нужным id, возвращаем его с обновленным количеством
            //     if (item.id === action.payload.id) {
            //             // Возвращаем новый объект, чтобы не мутировать существующий
            //         return {
            //             ...item,  // копируем все свойства из исходного элемента
            //             quantity: action.payload.quantity  // обновляем количество
            //         };
            //     }
            //     // Если элемент не нуждается в обновлении, возвращаем его без изменений
            //     return item;
            // });

            // Возвращаем новое состояние, включая обновленный массив элементов заказа
            const orderCartItemId = state.orderCartItems.findIndex(item => item.id === action.payload.id)
            state.orderCartItems[orderCartItemId].quantity = action.payload.quantity
            // const orderCartItem = state.orderCartItems.find(item => item.id === action.payload.id)
            
            // if (orderCartItem)
            // {
            //     orderCartItem.quantity = action.payload.quantity
            //     setOrderCartItemQuantityInLocalStorage(action.payload.id, action.payload.quantity)
            // }
        }
    }
})

export default orderCartSlice.reducer;
export const { addOrderCartItem, removeOrderCartItem, fetchOrderCartItemsFromLocalStorage, setOrderCartItemQuantity } = orderCartSlice.actions