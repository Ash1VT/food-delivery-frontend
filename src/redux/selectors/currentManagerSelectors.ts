import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const getCurrentRestaurantMenuItems = createSelector(
    [(state: RootState) => state.currentManagerRestaurantMenusReducer.menus],
    (menus) => {
        return menus.map((menu) => menu.menuCategories.map((menuCategory) => menuCategory.items)).flat().flat()
    }
)

export const getCurrentRestaurantPendingOrders = createSelector(
    [(state: RootState) => state.currentManagerRestaurantOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'pending')
    }
)

export const getCurrentRestaurantPreparingOrders = createSelector(
    [(state: RootState) => state.currentManagerRestaurantOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'preparing')
    }
)

export const getCurrentRestaurantDeliveredOrders = createSelector(
    [(state: RootState) => state.currentManagerRestaurantOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'delivered')
    }
)