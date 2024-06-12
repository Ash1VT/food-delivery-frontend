import { createSlice } from "@reduxjs/toolkit"
import { CustomerAddress } from "src/models/customerAddress.interfaces"

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
       
    }
})

export default currentCustomerAddressesSlice.reducer;