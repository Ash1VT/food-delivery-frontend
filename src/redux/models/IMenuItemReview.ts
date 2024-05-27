export default interface IMenuItemReview {
    id: string
    userFullName: string
    userImageUrl?: string
    userId: string
    menuItemId: string
    ratingValue: number
    text?: string
}