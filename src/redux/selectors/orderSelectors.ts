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

export const getRestaurantOrders = createSelector(
    [getOrders, (_, restaurantId: string) => restaurantId],
    (orders, restaurantId) => {
        return orders.filter((order) => order.restaurantId === restaurantId) as IOrder[]
    }
)

export const getRestaurantPendingOrders = createSelector(
    [getRestaurantOrders, (_, restaurantId: string) => restaurantId],
    (orders, restaurantId) => {
        return orders.filter((order) => order.status.toLowerCase() === 'pending')
    }
)

export const getRestaurantPreparingOrders = createSelector(
    [getRestaurantOrders, (_, restaurantId: string) => restaurantId],
    (orders, restaurantId) => {
        return orders.filter((order) => order.status.toLowerCase() === 'preparing')
    }
)

export const getRestaurantFinishedOrders = createSelector(
    [getRestaurantOrders, (_, restaurantId: string) => restaurantId],
    (orders, restaurantId) => {
        return orders.filter((order) => order.status.toLowerCase() === 'finished')
    }
)