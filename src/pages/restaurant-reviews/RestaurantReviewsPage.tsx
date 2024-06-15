import Footer from "src/components/footer"
import Navbar from "src/components/navbar"
import { useAppSelector } from "src/hooks/redux/useAppSelector"
import RestaurantReference from "src/components/restaurant-reference/RestaurantReference"
import ReviewsList from "src/components/reviews/reviews-list/ReviewsList"
import ReviewCreateForm from "src/components/reviews/forms/review-create-form/ReviewCreateForm"
import ReviewEditForm from "src/components/reviews/forms/review-edit-form/ReviewEditForm"
import { ReviewCreateType, ReviewType, ReviewUpdateType } from "src/components/reviews/reviews.types"
import { useAppDispatch } from "src/hooks/redux/useAppDispatch"
import MenuItemReference from "src/components/menu-item-reference/MenuItemReference"
import CurrentUserReview from "src/components/reviews/current-user-review/CurrentUserReview"
import { useParams } from "react-router-dom"
import NotFoundPage from "../not-found-page/NotFoundPage"
import isRestaurantOpen from "src/utils/isRestaurantOpen"
import './restaurant_reviews.css'
import { useEffect } from "react"
import { fetchRestaurant, fetchRestaurantReviews } from "src/redux/actions/restaurantReviews.actions"
import { addErrorNotification, addSuccessNotification } from "src/utils/notifications"
import { createRestaurantReview, deleteRestaurantReview, updateRestaurantReview } from "src/redux/actions/currentCustomerRestaurantReview.actions"


const RestaurantReviewsPage = () => {
    const dispatch = useAppDispatch()
    const { restaurantId } = useParams()

    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const { isLoading: isCurrentCustomerRestaurantReviewLoading, review: currentCustomerRestaurantReview, error: currentCustomerRestaurantReviewError } = useAppSelector((state) => state.currentCustomerRestaurantReviewReducer)

    const { isRestaurantLoading: isRestaurantLoading, isReviewsLoading: isRestaurantReviewsLoading, restaurant, reviews, restaurantError: restaurantError, reviewsError: restaurantReviewsError} = useAppSelector((state) => state.restaurantReviewsReducer)


    useEffect(() => {
        if (restaurantId) {
            dispatch(fetchRestaurant(restaurantId)).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    dispatch(fetchRestaurantReviews(restaurantId)).then((response) => {
                        if (response.meta.requestStatus === 'rejected') {
                            addErrorNotification(response.payload as string)
                        }
                    })
                }

                if (response.meta.requestStatus === 'rejected') {
                    addErrorNotification(response.payload as string)
                }
            })
        }
    }, [dispatch])


    if (!restaurant) 
        return <NotFoundPage/>

    const isOpen = isRestaurantOpen(restaurant)

    const handleReviewAdded = async (review: ReviewCreateType) => {
        dispatch(createRestaurantReview(review)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully added review')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleReviewUpdated = async (review: ReviewUpdateType) => {
        dispatch(updateRestaurantReview(review)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully updated review')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleReviewDeleted = async (review: ReviewType) => {
        dispatch(deleteRestaurantReview(review.id)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully deleted review')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    return (
        <div className="container restaurant__reviews__container">
            <Navbar currentUser={currentUser}/>
            <div className="restaurant__reviews__wrapper">
                <div className="restaurant__reviews__content">
                    <RestaurantReference isRestaurantOpen={isOpen} restaurant={restaurant}/>
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