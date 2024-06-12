export interface Promocode {
    id: string
    nameIdentifier: string
    discountPercentage: number
    validFrom: Date
    validUntil: Date
    maxUsageCount: number
    currentUsageCount: number
    isActive: boolean
    restaurantId: string
}

export interface PromocodeCreate {
    nameIdentifier: string
    discountPercentage: number
    validFrom: Date
    validUntil: Date
    maxUsageCount: number
    restaurantId: string
}

export interface PromocodeUpdate {
    id: string
    discountPercentage: number
    validFrom: Date
    validUntil: Date
    maxUsageCount: number
}