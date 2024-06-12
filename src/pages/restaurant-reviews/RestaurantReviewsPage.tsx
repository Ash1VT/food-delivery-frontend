import Footer from "src/components/footer"
import Navbar from "src/components/navbar"
import { useAppSelector } from "src/hooks/redux/useAppSelector"
import { getRestaurant, getRestaurantIsOpen } from "../../redux/selectors/restaurantSelectors"
import RestaurantReference from "src/components/restaurant-reference/RestaurantReference"
import ReviewsList from "src/components/reviews/reviews-list/ReviewsList"
import ReviewCreateForm from "src/components/reviews/forms/review-create-form/ReviewCreateForm"
import ReviewEditForm from "src/components/reviews/forms/review-edit-form/ReviewEditForm"
import { ReviewCreateType, ReviewType, ReviewUpdateType } from "src/components/reviews/reviews.types"
import { useAppDispatch } from "src/hooks/redux/useAppDispatch"
import MenuItemReference from "src/components/menu-item-reference/MenuItemReference"
import CurrentUserReview from "src/components/reviews/current-user-review/CurrentUserReview"
import './restaurant_reviews.css'
import { useParams } from "react-router-dom"
import NotFoundPage from "../not-found-page/NotFoundPage"


const RestaurantReviewsPage = () => {

    const { restaurantId } = useParams()

    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const { isLoading: isCurrentCustomerRestaurantReviewLoading, review: currentCustomerRestaurantReview, error: currentCustomerRestaurantReviewError } = useAppSelector((state) => state.currentCustomerRestaurantReviewReducer)

    const { isLoading: isRestaurantReviewsLoading, reviews, error: restaurantReviewsError} = useAppSelector((state) => state.restaurantReviewsReducer)

    const { isLoading: isRestaurantsLoading, error: restaurantsError } = useAppSelector((state) => state.restaurantsReducer)

    const restaurant = useAppSelector((state) => getRestaurant(state, restaurantId))
    const isRestaurantOpen = useAppSelector((state) => getRestaurantIsOpen(state, restaurantId))

    if (!restaurant) 
        return <NotFoundPage/>

    const handleReviewAdded = async (review: ReviewCreateType) => {
    }

    const handleReviewUpdated = async (review: ReviewUpdateType) => {
    }

    const handleReviewDeleted = async (review: ReviewType) => {
        console.log(review)
    }

    return (
        <div className="container restaurant__reviews__container">
            <Navbar currentUser={currentUser}/>
            <div className="restaurant__reviews__wrapper">
                <div className="restaurant__reviews__content">
                    <RestaurantReference isRestaurantOpen={isRestaurantOpen} restaurant={restaurant}/>
                    {currentUser &&
                        <div className="restaurant__reviews__current__user">
                            <CurrentUserReview currentUser={currentUser} 
                                               currentUserReview={currentCustomerRestaurantReview}
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