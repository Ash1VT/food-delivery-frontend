import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "src/store/store"
import IRestaurant from "../models/IRestaurant"

export const getRestaurants = (state: RootState) => state.restaurantsReducer.restaurants;

export const getRestaurant = createSelector(
    [getRestaurants, (_, id: string) => id],
    (restaurants, id) => {
      return restaurants.find((restaurant) => restaurant.id === id) as IRestaurant
    }
)
