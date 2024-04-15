import IUser from "src/redux/models/IUser"


export type ReviewCreateType = {
    userFullName: string
    userImageUrl?: string
    userId: string
    ratingValue: number
    text?: string
}

export type ReviewType = {
    id: string
} & ReviewCreateType

export type ReviewUpdateType = {
    id: string
    ratingValue: number
    text?: string
}

export type ReviewProps = ReviewType

export type ReviewsListProps = {
    reviews: ReviewProps[]
}

export type ReviewCreateFormProps = {
    title: string
    currentUser: IUser
    onReviewAdded: (review: ReviewCreateType) => Promise<void>
}

export type ReviewUpdateFormProps = {
    title: string
    currentUserReview: ReviewType
    onReviewUpdated: (review: ReviewUpdateType) => Promise<void>
    onReviewDeleted: (review: ReviewType) => Promise<void>
}