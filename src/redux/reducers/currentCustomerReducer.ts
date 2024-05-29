import { createSlice } from "@reduxjs/toolkit";
import ICustomerAddress from "../models/ICustomerAddress";

interface CurrentCustomerState {
    currentCustomerAddresses: ICustomerAddress[]
}

const initialState: CurrentCustomerState = {
    currentCustomerAddresses: [
        {
            id: '1',
            country: 'Test',
            region: 'Test',
            details: 'Test',
            approvalStatus: 'approved',
            customerId: '1'
        }
    ]
}

const currentCustomerSlice = createSlice({
    name: 'currentCustomer',
    initialState,
    reducers: {
       
    }
})

export default currentCustomerSlice.reducer;