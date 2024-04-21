import { useAppSelector } from "src/hooks/redux/useAppSelector"
import { getCurrentUser } from "src/redux/selectors"
import { CurrentUserReviewProps } from "./current_user_review.types"
import ReviewCreateForm from "../forms/review-create-form/ReviewCreateForm"
import ReviewEditForm from "../forms/review-edit-form/ReviewEditForm"

const CurrentUserReview = ({currentUser, currentUserReview, createTitle, updateTitle, onReviewAdded, onReviewUpdated, onReviewDeleted} : CurrentUserReviewProps) => {

    if (!currentUserReview)
        return <ReviewCreateForm title={createTitle} currentUser={currentUser} onReviewAdded={onReviewAdded}/>
    
    return <ReviewEditForm title={updateTitle} currentUserReview={currentUserReview} onReviewUpdated={onReviewUpdated} onReviewDeleted={onReviewDeleted}/>
}

export default CurrentUserReview