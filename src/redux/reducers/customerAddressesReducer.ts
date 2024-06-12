import { createSlice } from "@reduxjs/toolkit"
import { CustomerAddress } from "src/models/customerAddress.interfaces"

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
       
    }
})

export default customerAddressesSlice.reducer;