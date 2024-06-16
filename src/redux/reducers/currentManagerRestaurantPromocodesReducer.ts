import { createSlice } from "@reduxjs/toolkit"
import { Promocode } from "src/models/promocode.interfaces"
import { activatePromocode, createPromocode, deactivatePromocode, fetchCurrentManagerRestaurantPromocodes, updatePromocode } from "../actions/currentManagerRestaurantPromocodes.actions"

interface CurrentManagerRestaurantPromocodesState {
    isLoading: boolean
    promocodes: Promocode[]
    error?: string | undefined | null
}

const initialState: CurrentManagerRestaurantPromocodesState = {
    isLoading: false,
    promocodes: [],
    error: null
}

const currentManagerRestaurantPromocodesSlice = createSlice({
    name: 'currentManagerRestaurantPromocodes',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Current Manager Restaurant Promocodes

        builder.addCase(fetchCurrentManagerRestaurantPromocodes.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentManagerRestaurantPromocodes.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.promocodes = action.payload
        })

        builder.addCase(fetchCurrentManagerRestaurantPromocodes.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create promocode

        builder.addCase(createPromocode.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createPromocode.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.promocodes.push(action.payload)
        })

        builder.addCase(createPromocode.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Promocode

        builder.addCase(updatePromocode.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updatePromocode.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.promocodes = state.promocodes.map(promocode => promocode.id === action.payload.id ? action.payload : promocode)
        })

        builder.addCase(updatePromocode.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Activate Promocode

        builder.addCase(activatePromocode.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(activatePromocode.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const promocode = state.promocodes.find(promocode => promocode.id === action.payload)
            if (promocode) promocode.isActive = true
        })

        builder.addCase(activatePromocode.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Deactivate Promocode

        builder.addCase(deactivatePromocode.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deactivatePromocode.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const promocode = state.promocodes.find(promocode => promocode.id === action.payload)
            if (promocode) promocode.isActive = false
        })

        builder.addCase(deactivatePromocode.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default currentManagerRestaurantPromocodesSlice.reducer;