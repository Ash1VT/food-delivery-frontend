import { User } from "src/models/user.interfaces"
import { ReviewCreateType, ReviewUpdateType, ReviewType } from "../reviews.types"

export type CurrentUserReviewProps = {
    currentUser: User
    currentUserReview?: ReviewType | undefined | null
    createTitle: string
    updateTitle: string
    onReviewAdded: (review: ReviewCreateType) => Promise<void>
    onReviewUpdated: (review: ReviewUpdateType) => Promise<void>
    onReviewDeleted: (review: ReviewType) => Promise<void>
}