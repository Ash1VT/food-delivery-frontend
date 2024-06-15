import { createAsyncThunk } from "@reduxjs/toolkit"
import { Menu, MenuCreate, MenuRestaurant, MenuUpdate } from "src/models/menu.interfaces"
import { MenuCategory, MenuCategoryCreate, MenuCategoryUpdate, MenuCategoryUploadImage } from "src/models/menuCategory.interfaces"
import { MenuItem, MenuItemCategory, MenuItemCreate, MenuItemUpdate, MenuItemUploadImage } from "src/models/menuItem.interfaces"
import { MenuCategoryService } from "src/services/MenuCategoryService"
import { MenuItemService } from "src/services/MenuItemService"
import { MenuService } from "src/services/MenuService"

export const fetchCurrentManagerRestaurantMenus = createAsyncThunk<Menu[], string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/fetchCurrentManagerRestaurantMenus',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await MenuService.getRestaurantMenus(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const fetchCurrentManagerRestaurantCurrentMenu = createAsyncThunk<Menu, string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/fetchCurrentManagerRestaurantCurrentMenu',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            return await MenuService.getRestaurantCurrentMenu(restaurantId)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

// Menus

export const createRestaurantMenu = createAsyncThunk<Menu, MenuCreate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/createRestaurantMenu',
    async (data: MenuCreate, { rejectWithValue }) => {
        try {
            return await MenuService.createMenu(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateRestaurantMenu = createAsyncThunk<Menu, MenuUpdate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/updateRestaurantMenu',
    async (data: MenuUpdate, { rejectWithValue }) => {
        try {
            return await MenuService.updateMenu(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const deleteRestaurantMenu = createAsyncThunk<string, string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/deleteRestaurantMenu',
    async (menuId: string, { rejectWithValue }) => {
        try {
            await MenuService.deleteMenu(menuId)
            return menuId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const setCurrentRestaurantMenu = createAsyncThunk<MenuRestaurant, MenuRestaurant, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/setCurrentRestaurantMenu',
    async (data: MenuRestaurant, { rejectWithValue }) => {
        try {
            await MenuService.setCurrentRestaurantMenu(data)
            return data
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const unsetCurrentRestaurantMenu = createAsyncThunk<string, string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/unsetCurrentRestaurantMenu',
    async (restaurantId: string, { rejectWithValue }) => {
        try {
            await MenuService.unsetCurrentRestaurantMenu(restaurantId)
            return restaurantId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

// Menu Categories

export const createRestaurantMenuCategory = createAsyncThunk<MenuCategory, MenuCategoryCreate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/createRestaurantMenuCategory',
    async (data: MenuCategoryCreate, { rejectWithValue }) => {
        try {
            return await MenuCategoryService.createMenuCategory(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateRestaurantMenuCategory = createAsyncThunk<MenuCategory, MenuCategoryUpdate, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/updateRestaurantMenuCategory',
    async (data: MenuCategoryUpdate, { rejectWithValue }) => {
        try {
            return await MenuCategoryService.updateMenuCategory(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const uploadRestaurantMenuCategoryImage = createAsyncThunk<MenuCategory, MenuCategoryUploadImage, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/uploadRestaurantMenuCategoryImage',
    async (data: MenuCategoryUploadImage, { rejectWithValue }) => {
        try {
            return await MenuCategoryService.uploadMenuCategoryImage(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const deleteRestaurantMenuCategory = createAsyncThunk<string, string, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/deleteRestaurantMenuCategory',
    async (menuCategoryId: string, { rejectWithValue }) => {
        try {
            await MenuCategoryService.deleteMenuCategory(menuCategoryId)
            return menuCategoryId
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)


// Adding/Removing Menu Items to Menu Categories

export const addMenuItemToCategory = createAsyncThunk<MenuItemCategory, MenuItemCategory, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/addMenuItemToCategory',
    async (data: MenuItemCategory, { rejectWithValue }) => {
        try {
            await MenuItemService.addMenuItemToCategory(data)
            return data
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)


export const removeMenuItemFromCategory = createAsyncThunk<MenuItemCategory, MenuItemCategory, { rejectValue: string | undefined | null }>(
    'currentManagerRestaurantMenus/removeMenuItemFromCategory',
    async (data: MenuItemCategory, { rejectWithValue }) => {
        try {
            await MenuItemService.removeMenuItemFromCategory(data)
            return data
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)