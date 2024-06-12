import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const getCustomerAddresses = createSelector(
    [(state: RootState) => state.customerAddressesReducer.addresses, (state: RootState) => state.usersReducer.users],
    (addresses, users) => {
        return addresses.map((address) => {
            const user = users.find((user) => user.id === address.customerId)
            return {
                ...address,
                customer: user
            }
        })
    }
)