import IUser from "src/redux/models/IUser"
import { ReviewCreateType, ReviewUpdateType, ReviewType } from "../reviews.types"

export type CurrentUserReviewProps = {
    currentUser: IUser
    currentUserReview?: ReviewType | undefined | null
    createTitle: string
    updateTitle: string
    onReviewAdded: (review: ReviewCreateType) => Promise<void>
    onReviewUpdated: (review: ReviewUpdateType) => Promise<void>
    onReviewDeleted: (review: ReviewType) => Promise<void>
}