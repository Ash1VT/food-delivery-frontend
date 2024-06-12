import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const getCurrentCourierDeliveringOrders = createSelector(
    [(state: RootState) => state.currentCourierOrdersReducer.orders],
    (orders) => orders.filter((order) => order.status === "delivering")
)

export const getCurrentCourierDeliveredOrders = createSelector(
    [(state: RootState) => state.currentCourierOrdersReducer.orders],
    (orders) => orders.filter((order) => order.status === "delivered")
)