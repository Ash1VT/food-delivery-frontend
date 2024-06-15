import { createSlice } from "@reduxjs/toolkit"
import { Menu } from "src/models/menu.interfaces"
import { addMenuItemToCategory, createRestaurantMenu, createRestaurantMenuCategory, deleteRestaurantMenu, deleteRestaurantMenuCategory, fetchCurrentManagerRestaurantCurrentMenu, fetchCurrentManagerRestaurantMenus, removeMenuItemFromCategory, setCurrentRestaurantMenu, unsetCurrentRestaurantMenu, updateRestaurantMenu, updateRestaurantMenuCategory, uploadRestaurantMenuCategoryImage } from "../actions/currentManagerRestaurantMenus.actions"

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
       
    },
    extraReducers: (builder) => {
        // Fetch Restaurant Current Menu
        
        builder.addCase(fetchCurrentManagerRestaurantCurrentMenu.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentManagerRestaurantCurrentMenu.fulfilled, (state, action) => {
            state.isLoading = false
            state.currentMenuId = action.payload.id
            state.error = null
        })
        
        builder.addCase(fetchCurrentManagerRestaurantCurrentMenu.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Fetch Restaurant Menus

        builder.addCase(fetchCurrentManagerRestaurantMenus.pending, (state) => {
            state.isLoading = true
        })
        
        builder.addCase(fetchCurrentManagerRestaurantMenus.fulfilled, (state, action) => {
            state.isLoading = false
            state.menus = action.payload
            state.error = null
        })
        
        builder.addCase(fetchCurrentManagerRestaurantMenus.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create Restaurant Menu Category

        builder.addCase(createRestaurantMenuCategory.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createRestaurantMenuCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menus.forEach((menu, index) => {
                if (menu.id === action.payload.menuId) {
                    state.menus[index].menuCategories.push(action.payload)
                }
            })
        })
        
        builder.addCase(createRestaurantMenuCategory.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Restaurant Menu Category

        builder.addCase(updateRestaurantMenuCategory.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateRestaurantMenuCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
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
            state.isLoading = false
            state.error = action.error.message
        })

        // Upload Restaurant Menu Category Image

        builder.addCase(uploadRestaurantMenuCategoryImage.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(uploadRestaurantMenuCategoryImage.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
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
            state.isLoading = false
            state.error = action.error.message
        })

        // Delete Restaurant Menu Category

        builder.addCase(deleteRestaurantMenuCategory.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deleteRestaurantMenuCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menus.forEach((menu, menuIndex) => {
                menu.menuCategories.forEach((menuCategory, categoryIndex) => {
                    if (menuCategory.id === action.payload) {
                        state.menus[menuIndex].menuCategories.splice(categoryIndex, 1)
                    }
                })
            })
        })
        
        builder.addCase(deleteRestaurantMenuCategory.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create Restaurant Menu

        builder.addCase(createRestaurantMenu.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createRestaurantMenu.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menus.push(action.payload)
        })
        
        builder.addCase(createRestaurantMenu.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update Restaurant Menu

        builder.addCase(updateRestaurantMenu.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateRestaurantMenu.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menus.forEach((menu, menuIndex) => {
                if (menu.id === action.payload.id) {
                    const menu = state.menus[menuIndex]
                    menu.name = action.payload.name
                    menu.description = action.payload.description
                }
            })
        })
        
        builder.addCase(updateRestaurantMenu.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Delete Restaurant Menu

        builder.addCase(deleteRestaurantMenu.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deleteRestaurantMenu.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.menus = state.menus.filter(menu => menu.id !== action.payload)
        })
        
        builder.addCase(deleteRestaurantMenu.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Set Restaurant Current Menu

        builder.addCase(setCurrentRestaurantMenu.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(setCurrentRestaurantMenu.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.currentMenuId = action.payload.menuId
        })
        
        builder.addCase(setCurrentRestaurantMenu.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Unset Restaurant Current Menu

        builder.addCase(unsetCurrentRestaurantMenu.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(unsetCurrentRestaurantMenu.fulfilled, (state) => {
            state.isLoading = false
            state.error = null
            state.currentMenuId = null
        })
        
        builder.addCase(unsetCurrentRestaurantMenu.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Add Restaurant Menu Item to Category

        builder.addCase(addMenuItemToCategory.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(addMenuItemToCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null

            state.menus.forEach((menu, menuIndex) => {
                menu.menuCategories.forEach((menuCategory, categoryIndex) => {
                    menuCategory.items.forEach((menuItem, itemIndex) => {
                        if (menuItem.id === action.payload.itemId) {
                            const menuItem = state.menus[menuIndex].menuCategories[categoryIndex].items.splice(itemIndex, 1)[0]

                            state.menus.forEach((menu, menuIndex) => {
                                menu.menuCategories.forEach((menuCategory, categoryIndex) => {
                                    if (menuCategory.id === action.payload.categoryId) {
                                        state.menus[menuIndex].menuCategories[categoryIndex].items.push(menuItem)
                                    }
                                })
                            })
                        }
                    })
                })
            })
        })
        
        builder.addCase(addMenuItemToCategory.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Remove Restaurant Menu Item from Category

        builder.addCase(removeMenuItemFromCategory.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(removeMenuItemFromCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
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
            state.isLoading = false
            state.error = action.error.message
        })
        
    }
})

export default currentManagerRestaurantMenusSlice.reducer;