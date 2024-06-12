import { Restaurant } from "src/models/restaurant.interfaces"

export type RestaurantReferenceProps = {
    restaurant: Restaurant
    isRestaurantOpen: boolean
}

export type ShowRestaurantInfoButtonProps = {
    onShowInfoButtonClick?: () => void
}

export type ShowRestaurantRatingButtonProps = {
    ratingValue: number
    reviewsCount: number
    onShowRatingButtonClick: () => void
    [key: string]: any
}

export type ShowRestaurantWorkingHoursButtonProps = {
    isOpen: boolean
    onShowWorkingHoursButtonClick?: () => void
}