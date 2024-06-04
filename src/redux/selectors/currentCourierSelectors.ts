import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getCurrentCourierOrders = (state: RootState) => state.currentCourierReducer.currentCourierOrders

export const getAvailableOrders = (state: RootState) => state.currentCourierReducer.availableOrders


export const getCurrentCourierDeliveringOrders = createSelector(
    [getCurrentCourierOrders],
    (orders) => orders.filter((order) => order.status === "delivering")
)

export const getCurrentCourierDeliveredOrders = createSelector(
    [getCurrentCourierOrders],
    (orders) => orders.filter((order) => order.status === "delivered")
)