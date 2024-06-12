import { createSlice } from "@reduxjs/toolkit"
import { Promocode } from "src/models/promocode.interfaces"

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
       
    }
})

export default currentManagerRestaurantPromocodesSlice.reducer;