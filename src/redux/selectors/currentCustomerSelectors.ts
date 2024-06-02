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

export const getCurrentCustomerOrder = createSelector(
    [getCurrentCustomerOrders, (_, orderId: string) => orderId],
    (currentCustomerOrders, orderId) => {
        return currentCustomerOrders.find((order) => order.id === orderId)
    }
)