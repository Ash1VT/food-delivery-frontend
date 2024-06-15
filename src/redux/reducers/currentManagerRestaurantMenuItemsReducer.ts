import { createSlice } from "@reduxjs/toolkit"
import { MenuItem } from "src/models/menuItem.interfaces"
import { createRestaurantMenuItem, updateRestaurantMenuItem, uploadRestaurantMenuItemImage, deleteRestaurantMenuItem, fetchRestaurantMenuItems } from "../actions/currentManagerRestaurantMenuItems.actions"

interface CurrentManagerRestaurantMenuItemsState {
    isLoading: boolean
    menuItems: MenuItem[]
    error?: string | undefined | null
}

const initialState: CurrentManagerRestaurantMenuItemsState = {
    isLoading: false,
    menuItems: [],
    error: null
}

const currentManagerRestaurantMenuItemsSlice = createSlice({
    name: 'currentManagerRestaurantMenuItemsSlice',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Restaurant Menu Items

        builder.addCase(fetchRestaurantMenuItems.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchRestaurantMenuItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menuItems = action.payload
        })
        
        builder.addCase(fetchRestaurantMenuItems.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        
        // Create Restaurant Menu Item

        builder.addCase(createRestaurantMenuItem.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createRestaurantMenuItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menuItems.push(action.payload)
        })
        
        builder.addCase(createRestaurantMenuItem.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Restaurant Menu Item

        builder.addCase(updateRestaurantMenuItem.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateRestaurantMenuItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menuItems = state.menuItems.map(item => item.id === action.payload.id ? action.payload : item)
        })
        
        builder.addCase(updateRestaurantMenuItem.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Upload Restaurant Menu Item Image

        builder.addCase(uploadRestaurantMenuItemImage.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(uploadRestaurantMenuItemImage.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menuItems = state.menuItems.map(item => item.id === action.payload.id ? action.payload : item)
        })
        
        builder.addCase(uploadRestaurantMenuItemImage.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Delete Restaurant Menu Item

        builder.addCase(deleteRestaurantMenuItem.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deleteRestaurantMenuItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menuItems = state.menuItems.filter(item => item.id !== action.payload)
        })
        
        builder.addCase(deleteRestaurantMenuItem.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }

})

export default currentManagerRestaurantMenuItemsSlice.reducer