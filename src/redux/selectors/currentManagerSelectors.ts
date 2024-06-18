import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const getCurrentRestaurantMenu = createSelector(
    [(state: RootState) => state.currentManagerRestaurantMenusReducer.menus, (state: RootState) => state.currentManagerRestaurantMenusReducer.currentMenuId],
    (menus, currentMenuId) => {
        return currentMenuId ? menus.find((menu) => menu.id === currentMenuId) : null
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

export const getCurrentManagerCreateApplication = createSelector(
    [(state: RootState) => state.currentManagerRestaurantApplicationsReducer.applications],
    (applications) => {
        return applications.find((application) => application.type === 'create')
    }
)