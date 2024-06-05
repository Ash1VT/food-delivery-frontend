import IRestaurant from "src/redux/models/IRestaurant"

export type RestaurantReferenceProps = {
    restaurant: IRestaurant
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