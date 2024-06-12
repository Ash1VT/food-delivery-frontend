export interface ReviewCreate {
    rating: number
    comment?: string
    orderId?: string
    itemId?: string
    restaurantId?: string
}

export interface ReviewUpdate {
    id: string
    rating: number
    comment?: string
}