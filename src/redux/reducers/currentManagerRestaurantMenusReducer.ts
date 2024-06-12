import { createSlice } from "@reduxjs/toolkit"
import { Menu } from "src/models/menu.interfaces"

interface CurrentManagerRestaurantMenusState {
    isLoading: boolean
    currentMenuId?: string | undefined | null
    menus: Menu[]
    error?: string | undefined | null
}

const initialState: CurrentManagerRestaurantMenusState = {
    isLoading: false,
    currentMenuId: null,
    menus: [],
    error: null
}

const currentManagerRestaurantMenusSlice = createSlice({
    name: 'currentManagerRestaurantMenus',
    initialState,
    reducers: {
       
    }
})

export default currentManagerRestaurantMenusSlice.reducer;