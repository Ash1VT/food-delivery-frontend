import { createAsyncThunk } from "@reduxjs/toolkit";
import { CustomerAddress, CustomerAddressUpdate } from "src/models/customerAddress.interfaces";
import { CustomerAddressService } from "src/services/CustomerAddressService";

export const fetchCustomersAddresses = createAsyncThunk<CustomerAddress[], void, { rejectValue: string }>(
    'customerAddresses/fetchCustomersAddresses',
    async (_, { rejectWithValue }) => {
        try {
            return await CustomerAddressService.getCustomersAddresses()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateCustomerAddress = createAsyncThunk<CustomerAddress, CustomerAddressUpdate, { rejectValue: string }>(
    'customerAddresses/updateCustomerAddress',
    async (data: CustomerAddressUpdate, { rejectWithValue }) => {
        try {
            return await CustomerAddressService.updateCustomerAddress(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const approveCustomerAddress = createAsyncThunk<string, string, { rejectValue: string }>(
    'customerAddresses/approveCustomerAddress',
    async (addressId: string, { rejectWithValue }) => {
        try {
            await CustomerAddressService.approveCustomerAddress(addressId)
            return addressId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)   

export const rejectCustomerAddress = createAsyncThunk<string, string, { rejectValue: string }>(
    'customerAddresses/rejectCustomerAddress',
    async (addressId: string, { rejectWithValue }) => {
        try {
            await CustomerAddressService.rejectCustomerAddress(addressId)
            return addressId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)