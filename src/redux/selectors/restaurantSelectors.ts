import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store";
import moment from "moment";

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export const getRestaurant = createSelector(
    [(state: RootState) => state.restaurantsReducer.restaurants, (_, restaurantId?: string) => restaurantId],
    (restaurants, restaurantId) => {
        return restaurants.find((restaurant) => restaurant.id === restaurantId)
    }
)

export const getRestaurantIsOpen = createSelector(
    [getRestaurant],
    (restaurant) => {
        const now = moment().utc()
        const today = days[now.day()]
        const workingHours = restaurant?.workingHours.find(workingHour => workingHour.dayOfWeek === today)
        const nowTime = moment(now.format('HH:mm'), 'HH:mm');
        const openingTime = moment(workingHours?.openingTime, 'HH:mm');
        const closingTime = moment(workingHours?.closingTime, 'HH:mm');
        return workingHours ? nowTime.isBetween(openingTime, closingTime) : false
    }
)