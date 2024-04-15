export default interface IRestaurantReview {
    id: string
    userFullName: string
    userImageUrl?: string
    userId: string
    restaurantId: string
    ratingValue: number
    text?: string
}