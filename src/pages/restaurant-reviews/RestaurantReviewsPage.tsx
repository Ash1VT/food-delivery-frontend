import Footer from "src/components/footer"
import Navbar from "src/components/navbar"
import { useAppSelector } from "src/hooks/redux/useAppSelector"
import { getRestaurant } from "../../redux/selectors/restaurantSelectors"
import RestaurantReference from "src/components/restaurant-reference/RestaurantReference"
import ReviewsList from "src/components/reviews/reviews-list/ReviewsList"
import ReviewCreateForm from "src/components/reviews/forms/review-create-form/ReviewCreateForm"
import { getRestaurantCurrentUserReview, getRestaurantReviews } from "../../redux/selectors/restaurantReviewSelectors"
import ReviewEditForm from "src/components/reviews/forms/review-edit-form/ReviewEditForm"
import { ReviewCreateType, ReviewType, ReviewUpdateType } from "src/components/reviews/reviews.types"
import { useAppDispatch } from "src/hooks/redux/useAppDispatch"
import { addReview, deleteReview, updateReview } from "../../redux/reducers/restaurantReviewsReducer"
import MenuItemReference from "src/components/menu-item-reference/MenuItemReference"
import CurrentUserReview from "src/components/reviews/current-user-review/CurrentUserReview"
import { getCurrentUser } from "src/redux/selectors/currentUserSelectors"
import './restaurant_reviews.css'


const RestaurantReviewsPage = () => {

    const restaurantId = '1'

    const currentUser = useAppSelector((state) => getCurrentUser(state))
    const currentUserRestaurantReview = useAppSelector((state) => getRestaurantCurrentUserReview(state))

    const restaurant = useAppSelector((state) => getRestaurant(state, restaurantId))

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

    return (
        <div className="container restaurant__reviews__container">
            <Navbar currentUser={currentUser}/>
            <div className="restaurant__reviews__wrapper">
                <div className="restaurant__reviews__content">
                    <RestaurantReference {...restaurant}/>
                    {currentUser &&
                        <div className="restaurant__reviews__current__user">
                            <CurrentUserReview currentUser={currentUser} 
                                               currentUserReview={currentUserRestaurantReview}
                                               createTitle={`Leave your review about ${restaurant.name}`}
                                               updateTitle={`Your review about ${restaurant.name}`}
                                               onReviewAdded={handleReviewAdded}
                                               onReviewUpdated={handleReviewUpdated}
                                               onReviewDeleted={handleReviewDeleted}/>
                        </div>
                    }
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