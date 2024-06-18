import { createAsyncThunk } from "@reduxjs/toolkit"
import { MenuItem, MenuItemCreate, MenuItemUpdate, MenuItemUploadImage } from "src/models/menuItem.interfaces"
import { MenuItemService } from "src/services/MenuItemService"



export const fetchRestaurantMenuItems = createAsyncThunk<MenuItem[], string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenuItems/fetchRestaurantMenuItems',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await MenuItemService.getRestaurantMenuItems(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }

)
export const createRestaurantMenuItem = createAsyncThunk<MenuItem, MenuItemCreate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenuItems/createRestaurantMenuItem',
    async (data: MenuItemCreate, { rejectWithValue }) => {
        try {
            return await MenuItemService.createMenuItem(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateRestaurantMenuItem = createAsyncThunk<MenuItem, MenuItemUpdate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenuItems/updateRestaurantMenuItem',
    async (data: MenuItemUpdate, { rejectWithValue }) => {
        try {
            return await MenuItemService.updateMenuItem(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const uploadRestaurantMenuItemImage = createAsyncThunk<MenuItem, MenuItemUploadImage, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenuItems/uploadRestaurantMenuItemImage',
    async (data: MenuItemUploadImage, { rejectWithValue }) => {
        try {
            return await MenuItemService.uploadMenuItemImage(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const deleteRestaurantMenuItem = createAsyncThunk<string, string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenuItems/deleteRestaurantMenuItem',
    async (menuItemId: string, { rejectWithValue }) => {
        try {
            await MenuItemService.deleteMenuItem(menuItemId)
            return menuItemId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)