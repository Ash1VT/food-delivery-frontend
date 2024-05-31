import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getRestaurants } from "./restaurantSelectors";

export const currentRestaurantManagerSelector = (state: RootState) => state.currentRestaurantManagerReducer

export const getCurrentRestaurant = createSelector(
    [currentRestaurantManagerSelector, getRestaurants],
    (currentRestaurantManager, restaurants) => {
        return restaurants.find((restaurant) => restaurant.id === currentRestaurantManager.restaurantId)
    }
)

export const getCurrentRestaurantPromocodes = (state: RootState) => currentRestaurantManagerSelector(state).restaurantPromocodes

export const getCurrentRestaurantMenus = (state: RootState) => currentRestaurantManagerSelector(state).restaurantMenus

export const getCurrentRestaurantMenuItems = createSelector(
    [getCurrentRestaurantMenus],
    (currentRestaurantMenus) => {
        return currentRestaurantMenus.map((menu) => menu.menuCategories.map((menuCategory) => menuCategory.items)).flat().flat()
    }
)