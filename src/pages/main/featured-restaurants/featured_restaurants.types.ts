export type FeaturedRestaurantProps = {
    restaurant_image_url: string
    restaurant_logo_url: string
    restaurant_name: string
    rating_value: number
    is_opened: boolean
}

export type FeaturedRestaurantsSectionProps = {
    restaurants: FeaturedRestaurantProps[]
}

export type ViewRestaurantsButtonProps = {
    onClick: () => void
}