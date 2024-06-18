import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const getCurrentCustomerApprovedAddresses = createSelector(
    [(state: RootState) => state.currentCustomerAddressesReducer.addresses],
    (addresses) => {
        return addresses.filter((address) => address.approvalStatus.toLowerCase() === 'approved')
    }
)

export const getCurrentCustomerPendingAddresses = createSelector(
    [(state: RootState) => state.currentCustomerAddressesReducer.addresses],
    (addresses) => {
        return addresses.filter((address) => address.approvalStatus.toLowerCase() === 'pending')
    }
)

export const getCurrentCustomerRejectedAddresses = createSelector(
    [(state: RootState) => state.currentCustomerAddressesReducer.addresses],
    (addresses) => {
        return addresses.filter((address) => address.approvalStatus.toLowerCase() === 'rejected')
    }
)

export const getCurrentCustomerOrder = createSelector(
    [(state: RootState) => state.currentCustomerOrdersReducer.orders, (_, orderId?: string) => orderId],
    (orders, orderId) => {
        return orders.find((order) => order.id === orderId)
    }
)

export const getCurrentCustomerPlacingOrders = createSelector(
    [(state: RootState) => state.currentCustomerOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'placing')
    }
)

export const getCurrentCustomerPendingOrders = createSelector(
    [(state: RootState) => state.currentCustomerOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'pending')
    }
)

export const getCurrentCustomerPreparingOrders = createSelector(
    [(state: RootState) => state.currentCustomerOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'preparing')
    }
)

export const getCurrentCustomerReadyOrders = createSelector(
    [(state: RootState) => state.currentCustomerOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'ready')
    }
)

export const getCurrentCustomerDeliveringOrders = createSelector(
    [(state: RootState) => state.currentCustomerOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'delivering')
    }
)

export const getCurrentCustomerDeliveredOrders = createSelector(
    [(state: RootState) => state.currentCustomerOrdersReducer.orders],
    (orders) => {
        return orders.filter((order) => order.status.toLowerCase() === 'delivered')
    }
)
