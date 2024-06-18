import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { MenuCategory } from "src/models/menuCategory.interfaces";
import { MenuItem } from "src/models/menuItem.interfaces";


export const getMenuCategories = createSelector(
    [(state: RootState) => state.restaurantMenuReducer.menu],
    (menu) => {
        return menu?.menuCategories
    }
)

export const getMenuItems = createSelector(
    [getMenuCategories],
    (menuCategories) => {
        return menuCategories?.reduce((acc: MenuItem[], category: MenuCategory) => {
            return [...acc, ...category.items];
        }, []);
    }
)

export const getMenuCategory = createSelector(
    [getMenuCategories, (_: RootState, restaurantId?: string, menuCategoryId?: string) => menuCategoryId],
    (menuCategories, id) => {
        return menuCategories?.find((menuCategory) => menuCategory.id === id)
    }
)

export const getMenuItem = createSelector(
    [getMenuItems, (_: RootState, restaurantId?: string, menuItemid?: string) => menuItemid],
    (menuItems, id) => {
        return menuItems?.find((menuItem) => menuItem.id === id)
    }
)