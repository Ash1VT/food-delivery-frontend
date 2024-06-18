import { createSlice } from "@reduxjs/toolkit"
import { CustomerAddress } from "src/models/customerAddress.interfaces"
import { createCustomerAddress, deleteCustomerAddress, fetchCurrentCustomerAddresses } from "../actions/currentCustomerAddresses.actions"

interface CurrentCustomerAddressesState {
    isLoading: boolean
    addresses: CustomerAddress[]
    error?: string | undefined | null
}

const initialState: CurrentCustomerAddressesState = {
    isLoading: false,
    addresses: [],
    error: null
}


const currentCustomerAddressesSlice = createSlice({
    name: 'currentCustomerAddresses',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {

        // Fetch Current Customer Addresses
        
        builder.addCase(fetchCurrentCustomerAddresses.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentCustomerAddresses.fulfilled, (state, action) => {
            state.isLoading = false
            state.addresses = action.payload
            state.error = null
        })

        builder.addCase(fetchCurrentCustomerAddresses.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create Customer Address

        builder.addCase(createCustomerAddress.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createCustomerAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.addresses.push(action.payload)
            state.error = null
        })

        builder.addCase(createCustomerAddress.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Delete Customer Address

        builder.addCase(deleteCustomerAddress.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deleteCustomerAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.addresses = state.addresses.filter(address => address.id !== action.payload)
            state.error = null
        })

        builder.addCase(deleteCustomerAddress.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default currentCustomerAddressesSlice.reducer;