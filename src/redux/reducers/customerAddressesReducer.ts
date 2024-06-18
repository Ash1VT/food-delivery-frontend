import { createSlice } from "@reduxjs/toolkit"
import { CustomerAddress } from "src/models/customerAddress.interfaces"
import { approveCustomerAddress, fetchCustomersAddresses, rejectCustomerAddress, updateCustomerAddress } from "../actions/customerAddresses.actions"

interface CustomerAddressesState {
    isLoading: boolean
    addresses: CustomerAddress[]
    error?: string | undefined | null
}

const initialState: CustomerAddressesState = {
    isLoading: false,
    addresses: [],
    error: null
}

const customerAddressesSlice = createSlice({
    name: 'customerAddresses',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {

        // Fetch Customers Addresses
        
        builder.addCase(fetchCustomersAddresses.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCustomersAddresses.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.addresses = action.payload
        })

        builder.addCase(fetchCustomersAddresses.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Customer Address

        builder.addCase(updateCustomerAddress.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateCustomerAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.addresses = state.addresses.map(address => address.id === action.payload.id ? {
                ...address,
                ...action.payload
            } : address)
        })

        builder.addCase(updateCustomerAddress.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Approve Customer Address

        builder.addCase(approveCustomerAddress.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(approveCustomerAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const address = state.addresses.find(address => address.id === action.payload)
            if (address) address.approvalStatus = 'approved'
        })

        builder.addCase(approveCustomerAddress.rejected, (state, action) => {   
            state.isLoading = false
            state.error = action.error.message
        })

        // Reject Customer Address

        builder.addCase(rejectCustomerAddress.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(rejectCustomerAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const address = state.addresses.find(address => address.id === action.payload)
            if (address) address.approvalStatus = 'rejected'
        })

        builder.addCase(rejectCustomerAddress.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default customerAddressesSlice.reducer;