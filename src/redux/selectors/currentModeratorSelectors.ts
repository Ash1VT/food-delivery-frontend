import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getUsers = (state: RootState) => state.currentModeratorReducer.users

export const getRestaurantApplications = (state: RootState) => state.currentModeratorReducer.restaurantApplications

export const getCustomerAddresses = createSelector(
    [(state: RootState) => state.currentModeratorReducer.customerAddresses, getUsers],
    (customerAddresses, users) => {
        return customerAddresses.map((address) => {
            const user = users.find((user) => user.id === address.customerId)
            return {
                ...address,
                customer: user
            }
        })
    }
)