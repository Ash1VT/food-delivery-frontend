import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import IOrderItem from "../models/IOrderItem";
import IOrder from "../models/IOrder";

export const getOrders = (state: RootState) => state.orderReducer.orders


export const getOrder = createSelector(
    [getOrders, (_, id: string) => id],
    (orders, orderId) => {
        return orders.find((order) => order.id === orderId) as IOrder
    }
)

export const getOrderItems = createSelector(
    [getOrders, (_, id: string) => id],
    (orders, orderId) => {
        return orders.find((order) => order.id === orderId)?.items as IOrderItem[]
    }
)