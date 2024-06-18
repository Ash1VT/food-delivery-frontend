export interface Review {
    id: string
    rating: number
    comment?: string
    customerId: string
    customerFullName: string
    customerImageUrl?: string
    orderId?: string
    restaurantId?: string
    itemId?: string
}

export interface ReviewCreate {
    rating: number
    comment?: string
    orderId?: string
    itemId?: string
    restaurantId?: string
}

export interface ReviewUpdate {
    id: string
    rating?: number
    comment?: string
}