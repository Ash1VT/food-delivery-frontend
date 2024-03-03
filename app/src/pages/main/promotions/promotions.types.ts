export type PromotionRestaurantProps = {
    image_url: string
    discount_amount: number
    restaurant_name: string
    promotion_days_remaining: number
}

export type PromotionsSectionProps = {
    promotions: PromotionRestaurantProps[]
}