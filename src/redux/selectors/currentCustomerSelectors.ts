import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getCurrentCustomerAddresses = (state: RootState) => state.currentCustomerReducer.currentCustomerAddresses

export const getCurrentCustomerOrders = (state: RootState) => state.currentCustomerReducer.currentCustomerOrders

export const getCurrentCustomerApprovedAddresses = createSelector(
    [getCurrentCustomerAddresses],
    (currentCustomerAddresses) => {
        return currentCustomerAddresses.filter((customerAddress) => customerAddress.approvalStatus.toLowerCase() === 'approved')
    }
)

export const getCurrentCustomerPendingAddresses = createSelector(
    [getCurrentCustomerAddresses],
    (currentCustomerAddresses) => {
        return currentCustomerAddresses.filter((customerAddress) => customerAddress.approvalStatus.toLowerCase() === 'pending')
    }
)

export const getCurrentCustomerRejectedAddresses = createSelector(
    [getCurrentCustomerAddresses],
    (currentCustomerAddresses) => {
        return currentCustomerAddresses.filter((customerAddress) => customerAddress.approvalStatus.toLowerCase() === 'rejected')
    }
)

export const getCurrentCustomerOrder = createSelector(
    [getCurrentCustomerOrders, (_, orderId: string) => orderId],
    (currentCustomerOrders, orderId) => {
        return currentCustomerOrders.find((order) => order.id === orderId)
    }
)

export const getCurrentCustomerPlacingOrders = createSelector(
    [getCurrentCustomerOrders],
    (currentCustomerOrders) => {
        return currentCustomerOrders.filter((order) => order.status.toLowerCase() === 'placing')
    }
)

export const getCurrentCustomerPendingOrders = createSelector(
    [getCurrentCustomerOrders],
    (currentCustomerOrders) => {
        return currentCustomerOrders.filter((order) => order.status.toLowerCase() === 'pending')
    }
)

export const getCurrentCustomerPreparingOrders = createSelector(
    [getCurrentCustomerOrders],
    (currentCustomerOrders) => {
        return currentCustomerOrders.filter((order) => order.status.toLowerCase() === 'preparing')
    }
)

export const getCurrentCustomerReadyOrders = createSelector(
    [getCurrentCustomerOrders],
    (currentCustomerOrders) => {
        return currentCustomerOrders.filter((order) => order.status.toLowerCase() === 'ready')
    }
)

export const getCurrentCustomerDeliveringOrders = createSelector(
    [getCurrentCustomerOrders],
    (currentCustomerOrders) => {
        return currentCustomerOrders.filter((order) => order.status.toLowerCase() === 'delivering')
    }
)

export const getCurrentCustomerDeliveredOrders = createSelector(
    [getCurrentCustomerOrders],
    (currentCustomerOrders) => {
        return currentCustomerOrders.filter((order) => order.status.toLowerCase() === 'delivered')
    }
)
