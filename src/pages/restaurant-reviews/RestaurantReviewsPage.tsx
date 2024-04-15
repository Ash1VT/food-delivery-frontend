import Footer from "src/components/footer"
import Navbar from "src/components/navbar"
import { useAppSelector } from "src/hooks/redux/useAppSelector"
import { getRestaurant } from "../restaurants/redux/selectors"
import RestaurantReference from "src/components/restaurant-reference/RestaurantReference"
import ReviewsList from "src/components/reviews/reviews-list/ReviewsList"
import ReviewCreateForm from "src/components/reviews/forms/review-create-form/ReviewCreateForm"
import { getCurrentUser } from "src/redux/selectors"
import { getRestaurantCurrentUserReview, getRestaurantReviews } from "./redux/selectors"
import ReviewEditForm from "src/components/reviews/forms/review-edit-form/ReviewEditForm"
import { ReviewCreateType, ReviewType, ReviewUpdateType } from "src/components/reviews/reviews.types"
import { useAppDispatch } from "src/hooks/redux/useAppDispatch"
import { addReview, deleteReview, updateReview } from "./redux/reducers/restaurantReviewsReducer"
import './restaurant_reviews.css'
import { useEffect } from "react"

const RestaurantReviewsPage = () => {

    const restaurantId = '1'

    const restaurant = useAppSelector((state) => getRestaurant(state, restaurantId))
    const currentUser = useAppSelector((state) => getCurrentUser(state))
    const currentUserReview = useAppSelector((state) => getRestaurantCurrentUserReview(state))

    const reviews = useAppSelector((state) => getRestaurantReviews(state))

    const dispatch = useAppDispatch()

    const handleReviewAdded = async (review: ReviewCreateType) => {
        dispatch(addReview(review))
    }

    const handleReviewUpdated = async (review: ReviewUpdateType) => {
        dispatch(updateReview(review))
    }

    const handleReviewDeleted = async (review: ReviewType) => {
        console.log(review)
        dispatch(deleteReview(review))
    }


    const CurrentUserReviewComponent = () => {
        if (!currentUser)
            return null

        if (!currentUserReview)
            return <ReviewCreateForm title="Leave your review about Restaurant" currentUser={currentUser} onReviewAdded={handleReviewAdded}/>
        
        return <ReviewEditForm title="Your review about Restaurant" currentUserReview={currentUserReview} onReviewUpdated={handleReviewUpdated} onReviewDeleted={handleReviewDeleted}/>
    }

    return (
        <div className="container restaurant__reviews__container">
            <Navbar/>
            <div className="restaurant__reviews__wrapper">
                <div className="restaurant__reviews__content">
                    <RestaurantReference {...restaurant}/>
                    <div>
                        <CurrentUserReviewComponent/>
                    </div>
                    <div className="restaurant__reviews__list__wrapper">
                        <h2 className="restaurant__reviews__title">Reviews</h2>
                        <ReviewsList reviews={reviews}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RestaurantReviewsPage