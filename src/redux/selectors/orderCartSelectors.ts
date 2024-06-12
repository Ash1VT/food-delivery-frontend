import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getIfOrderItemInCart = createSelector(
    [(state: RootState) => state.orderCartReducer.orderCartItems, (_, orderCartItemId: string) => orderCartItemId],
    (orderCartItems, orderCartItemId) => {
        return Boolean(orderCartItems.find(item => item.id === orderCartItemId))
    }
)