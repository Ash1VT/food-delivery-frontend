import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getCurrentCustomerAddresses = (state: RootState) => state.currentCustomerReducer.currentCustomerAddresses


export const getCurrentCustomerApprovedAddresses = createSelector(
    [getCurrentCustomerAddresses],
    (currentCustomerAddresses) => {
        return currentCustomerAddresses.filter((customerAddress) => customerAddress.approvalStatus.toLowerCase() === 'approved')
    }
)