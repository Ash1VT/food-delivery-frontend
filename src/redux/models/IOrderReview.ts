export default interface IOrderReview {
    id: string
    userFullName: string
    userImageUrl?: string
    userId: string
    orderId: string
    rating: number
    text?: string
}