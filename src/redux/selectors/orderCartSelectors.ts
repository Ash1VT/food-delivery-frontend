import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const orderCartItemsSelector = (state: RootState) => state.orderCartReducer.orderCartItems

export const getOrderCartItems = (state: RootState) => orderCartItemsSelector(state)

export const getIfOrderItemInCart = createSelector(
    [getOrderCartItems, (_, orderCartItemId: string) => orderCartItemId],
    (orderCartItems, orderCartItemId) => {
        return Boolean(orderCartItems.find(item => item.id === orderCartItemId))
    }
)