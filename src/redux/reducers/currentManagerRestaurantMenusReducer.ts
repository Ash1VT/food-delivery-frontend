import { createSlice } from "@reduxjs/toolkit"
import { Menu } from "src/models/menu.interfaces"
import { addMenuItemToCategory, createRestaurantMenu, createRestaurantMenuCategory, deleteRestaurantMenu, deleteRestaurantMenuCategory, fetchCurrentManagerRestaurantCurrentMenu, fetchCurrentManagerRestaurantMenus, removeMenuItemFromCategory, setCurrentRestaurantMenu, unsetCurrentRestaurantMenu, updateRestaurantMenu, updateRestaurantMenuCategory, uploadRestaurantMenuCategoryImage } from "../actions/currentManagerRestaurantMenus.actions"

interface CurrentManagerRestaurantMenusState {
    isCurrentMenuLoading: boolean
    isMenusLoading: boolean
    currentMenuId?: string | undefined | null
    menus: Menu[]
    currentMenuError?: string | undefined | null
    menusError?: string | undefined | null
}

const initialState: CurrentManagerRestaurantMenusState = {
    isCurrentMenuLoading: false,
    isMenusLoading: false,
    currentMenuId: null,
    menus: [],
    currentMenuError: null,
    menusError: null
}

const currentManagerRestaurantMenusSlice = createSlice({
    name: 'currentManagerRestaurantMenus',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Fetch Restaurant Current Menu
        
        builder.addCase(fetchCurrentManagerRestaurantCurrentMenu.pending, (state) => {
            state.isCurrentMenuLoading = true
        })

        builder.addCase(fetchCurrentManagerRestaurantCurrentMenu.fulfilled, (state, action) => {
            state.isCurrentMenuLoading = false
            state.currentMenuError = null
            
            if (action.payload) state.currentMenuId = action.payload.id
        })
        
        builder.addCase(fetchCurrentManagerRestaurantCurrentMenu.rejected, (state, action) => {
            state.isCurrentMenuLoading = false
            state.currentMenuError = action.error.message
        })

        // Fetch Restaurant Menus

        builder.addCase(fetchCurrentManagerRestaurantMenus.pending, (state) => {
            state.isMenusLoading = true
        })
        
        builder.addCase(fetchCurrentManagerRestaurantMenus.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menus = action.payload
            state.menusError = null
        })
        
        builder.addCase(fetchCurrentManagerRestaurantMenus.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Create Restaurant Menu Category

        builder.addCase(createRestaurantMenuCategory.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(createRestaurantMenuCategory.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus.forEach((menu, index) => {
                if (menu.id === action.payload.menuId) {
                    state.menus[index].menuCategories.push(action.payload)
                }
            })
        })
        
        builder.addCase(createRestaurantMenuCategory.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Update Restaurant Menu Category

        builder.addCase(updateRestaurantMenuCategory.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(updateRestaurantMenuCategory.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus.forEach((menu, menuIndex) => {
                menu.menuCategories.forEach((menuCategory, categoryIndex) => {
                    if (menuCategory.id === action.payload.id) {
                        const menuCategory = state.menus[menuIndex].menuCategories[categoryIndex]
                        menuCategory.imageUrl = action.payload.imageUrl
                        menuCategory.menuId = action.payload.menuId
                        menuCategory.name = action.payload.name
                    }
                })
            })
        })
        
        builder.addCase(updateRestaurantMenuCategory.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Upload Restaurant Menu Category Image

        builder.addCase(uploadRestaurantMenuCategoryImage.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(uploadRestaurantMenuCategoryImage.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus.forEach((menu, menuIndex) => {
                menu.menuCategories.forEach((menuCategory, categoryIndex) => {
                    if (menuCategory.id === action.payload.id) {
                        const menuCategory = state.menus[menuIndex].menuCategories[categoryIndex]
                        menuCategory.imageUrl = action.payload.imageUrl
                    }
                })
            })
        })
        
        builder.addCase(uploadRestaurantMenuCategoryImage.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Delete Restaurant Menu Category

        builder.addCase(deleteRestaurantMenuCategory.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(deleteRestaurantMenuCategory.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus.forEach((menu, menuIndex) => {
                menu.menuCategories.forEach((menuCategory, categoryIndex) => {
                    if (menuCategory.id === action.payload) {
                        state.menus[menuIndex].menuCategories.splice(categoryIndex, 1)
                    }
                })
            })
        })
        
        builder.addCase(deleteRestaurantMenuCategory.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Create Restaurant Menu

        builder.addCase(createRestaurantMenu.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(createRestaurantMenu.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus.push(action.payload)
        })
        
        builder.addCase(createRestaurantMenu.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Update Restaurant Menu

        builder.addCase(updateRestaurantMenu.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(updateRestaurantMenu.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus.forEach((menu, menuIndex) => {
                if (menu.id === action.payload.id) {
                    const menu = state.menus[menuIndex]
                    menu.name = action.payload.name
                    menu.description = action.payload.description
                }
            })
        })
        
        builder.addCase(updateRestaurantMenu.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Delete Restaurant Menu

        builder.addCase(deleteRestaurantMenu.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(deleteRestaurantMenu.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus = state.menus.filter(menu => menu.id !== action.payload)
        })
        
        builder.addCase(deleteRestaurantMenu.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Set Restaurant Current Menu

        builder.addCase(setCurrentRestaurantMenu.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(setCurrentRestaurantMenu.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.currentMenuId = action.payload.menuId
        })
        
        builder.addCase(setCurrentRestaurantMenu.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Unset Restaurant Current Menu

        builder.addCase(unsetCurrentRestaurantMenu.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(unsetCurrentRestaurantMenu.fulfilled, (state) => {
            state.isMenusLoading = false
            state.menusError = null
            state.currentMenuId = null
        })
        
        builder.addCase(unsetCurrentRestaurantMenu.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Add Restaurant Menu Item to Category

        builder.addCase(addMenuItemToCategory.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(addMenuItemToCategory.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus.forEach((menu, menuIndex) => {
                menu.menuCategories.forEach((menuCategory, categoryIndex) => {
                    if (menuCategory.id === action.payload.categoryId) {
                        state.menus[menuIndex].menuCategories[categoryIndex].items.push(action.payload.menuItem)
                    }
                })
            })
        })
        
        builder.addCase(addMenuItemToCategory.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })

        // Remove Restaurant Menu Item from Category

        builder.addCase(removeMenuItemFromCategory.pending, (state) => {
            state.isMenusLoading = true
        })

        builder.addCase(removeMenuItemFromCategory.fulfilled, (state, action) => {
            state.isMenusLoading = false
            state.menusError = null
            state.menus.forEach((menu, menuIndex) => {
                menu.menuCategories.forEach((menuCategory, categoryIndex) => {
                    menuCategory.items.forEach((menuItem, itemIndex) => {
                        if (menuItem.id === action.payload.itemId) {
                            state.menus[menuIndex].menuCategories[categoryIndex].items.splice(itemIndex, 1)
                        }
                    })
                })
            })
        })
        
        builder.addCase(removeMenuItemFromCategory.rejected, (state, action) => {
            state.isMenusLoading = false
            state.menusError = action.error.message
        })
        
    }
})

export default currentManagerRestaurantMenusSlice.reducer;