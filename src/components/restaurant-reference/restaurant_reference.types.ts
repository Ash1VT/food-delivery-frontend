export type RestaurantReferenceProps = {
    name: string
    description: string
    imageUrl: string
    address: string
    ratingValue: number
    reviewsCount: number
}

export type ShowRestaurantInfoButtonProps = {
    onShowInfoButtonClick?: () => void
}

export type ShowRestaurantInfoRatingProps = {
    ratingValue: number
    reviewsCount: number
    onShowRatingButtonClick?: () => void
    [key: string]: any
}
