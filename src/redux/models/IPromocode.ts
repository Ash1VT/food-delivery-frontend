export default interface IPromocode {
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