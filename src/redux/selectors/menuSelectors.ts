import { createSelector } from "@reduxjs/toolkit"
import IMenuCategory from "../models/IMenuCategory"
import IMenuItem from "../models/IMenuItem"
import { RootState } from "../store";


export const getMenu = (state: RootState) => state.menuReducer.menu;

export const getMenuCategories = (state: RootState) => getMenu(state).menuCategories;

export const getMenuItems = createSelector(
    getMenuCategories,
    (menuCategories) => {
        return menuCategories.reduce((acc: IMenuItem[], category: IMenuCategory) => {
            return [...acc, ...category.items];
        }, []);
    }
)

export const getMenuCategory = createSelector(
    [getMenuCategories, (_, id: string) => id],
    (menuCategories, id) => {
        return menuCategories.find((menuCategory) => menuCategory.id === id) as IMenuCategory
    }
)

export const getMenuItem = createSelector(
    [getMenuItems, (_, id: string) => id],
    (menuItems, id) => {
        return menuItems.find((menuItem) => menuItem.id === id) as IMenuItem
    }
)