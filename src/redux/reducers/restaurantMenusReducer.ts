import { createSlice } from "@reduxjs/toolkit";
import { Menu } from "src/models/menu.interfaces";

interface RestaurantMenusState {
    isLoading: boolean
    menus: Menu[]
    error?: string | undefined | null
}

const initialState: RestaurantMenusState = {
    isLoading: false,
    menus: [],
    error: null
}

export const restaurantMenusSlice = createSlice({
    name: 'restaurantMenus',
    initialState,
    reducers: {

    }
})

export default restaurantMenusSlice.reducer;