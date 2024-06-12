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

}

export interface ReviewUpdate {
    
}