import { User } from "src/models/user.interfaces"


export type ReviewCreateType = {
    customerFullName: string
    customerImageUrl?: string
    customerId: string
    rating: number
    comment?: string
}

export type ReviewType = {
    id: string
} & ReviewCreateType

export type ReviewUpdateType = {
    id: string
    rating: number
    comment?: string
}

export type ReviewProps = ReviewType

export type ReviewsListProps = {
    reviews: ReviewProps[]
}

export type ReviewCreateFormProps = {
    title: string
    currentUser: User
    onReviewAdded: (review: ReviewCreateType) => Promise<void>
}

export type ReviewUpdateFormProps = {
    title: string
    currentUserReview: ReviewType
    onReviewUpdated: (review: ReviewUpdateType) => Promise<void>
    onReviewDeleted: (review: ReviewType) => Promise<void>
}