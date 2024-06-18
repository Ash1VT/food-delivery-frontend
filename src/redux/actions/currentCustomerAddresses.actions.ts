import { createAsyncThunk } from "@reduxjs/toolkit";
import { CustomerAddress, CustomerAddressCreate } from "src/models/customerAddress.interfaces";
import { CustomerAddressService } from "src/services/CustomerAddressService";

export const fetchCurrentCustomerAddresses = createAsyncThunk<CustomerAddress[], void, { rejectValue: string }>(
    'currentCustomerAddresses/fetchCurrentCustomerAddresses',
    async (_, { rejectWithValue }) => {
        try {
            return await CustomerAddressService.getCurrentCustomerAddresses()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const createCustomerAddress = createAsyncThunk<CustomerAddress, CustomerAddressCreate, { rejectValue: string }>(
    'currentCustomerAddresses/createCustomerAddress',
    async (data: CustomerAddressCreate, { rejectWithValue }) => {
        try {
            return await CustomerAddressService.createCurrentCustomerAddress(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const deleteCustomerAddress = createAsyncThunk<string, string, { rejectValue: string }>(
    'currentCustomerAddresses/deleteCustomerAddress',
    async (addressId: string, { rejectWithValue }) => {
        try {
            await CustomerAddressService.deleteCurrentCustomerAddress(addressId)
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