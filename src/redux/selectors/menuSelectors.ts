import { createSelector } from "@reduxjs/toolkit"
import IMenuCategory from "../models/IMenuCategory"
import IMenuItem from "../models/IMenuItem"
import { RootState } from "../store";


export const getMenus = (state: RootState) => state.menuReducer.currentRestaurantsMenus;


export const getMenu = createSelector(
    [getMenus, (_: RootState, restaurantId: string | undefined) => restaurantId],
    (currentRestaurantsMenus, restaurantId) => {
        return currentRestaurantsMenus.find((menu) => menu.restaurantId === restaurantId)
    }
)

export const getMenuCategories = createSelector(
    [getMenu],
    (menu) => {
        return menu?.menuCategories
    }
)


export const getMenuItems = createSelector(
    [getMenuCategories],
    (menuCategories) => {
        return menuCategories?.reduce((acc: IMenuItem[], category: IMenuCategory) => {
            return [...acc, ...category.items];
        }, []);
    }
)

export const getMenuCategory = createSelector(
    [getMenuCategories, (_: RootState, restaurantId: string, menuCategoryId: string) => menuCategoryId],
    (menuCategories, id) => {
        return menuCategories?.find((menuCategory) => menuCategory.id === id) as IMenuCategory
    }
)

export const getMenuItem = createSelector(
    [getMenuItems, (_: RootState, restaurantId: string, menuItemid: string) => menuItemid],
    (menuItems, id) => {
        return menuItems?.find((menuItem) => menuItem.id === id) as IMenuItem
    }
)

// export const getCurrentRestaurantMenuCategory = createSelector(
    
// )


// export const getMenuCategory = createSelector(
//     [getMenuCategories, (_, id: string) => id],
//     (menuCategories, id) => {
//         return menuCategories.find((menuCategory) => menuCategory.id === id) as IMenuCategory
//     }
// )

// export const getMenuItem = createSelector(
//     [getMenuItems, (_, id: string) => id],
//     (menuItems, id) => {
//         return menuItems.find((menuItem) => menuItem.id === id) as IMenuItem
//     }
// )