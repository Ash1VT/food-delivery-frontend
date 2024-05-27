import { createSelector } from "@reduxjs/toolkit"
import IRestaurant from "../models/IRestaurant"
import { RootState } from "../store";

export const getRestaurants = (state: RootState) => state.restaurantsReducer.restaurants;

export const getRestaurant = createSelector(
    [getRestaurants, (_, id: string) => id],
    (restaurants, id) => {
      return restaurants.find((restaurant) => restaurant.id === id) as IRestaurant
    }
)
