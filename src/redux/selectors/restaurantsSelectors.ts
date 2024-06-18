import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RestaurantsList } from "src/models/restaurant.interfaces";

export const getRestaurantsPage = createSelector(
    [(state: RootState) => state.restaurantsReducer.restaurants, (_, page: number) => page],
    (restaurantsList: RestaurantsList[], page) => {
        return restaurantsList.length >= page + 1 && restaurantsList[page]
    }
)