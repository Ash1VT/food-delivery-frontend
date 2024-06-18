import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import RestaurantReference from 'src/components/restaurant-reference/RestaurantReference'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import ReviewsList from 'src/components/reviews/reviews-list/ReviewsList'
import { ReviewCreateType, ReviewUpdateType, ReviewType } from 'src/components/reviews/reviews.types'
import MenuItemReference from 'src/components/menu-item-reference/MenuItemReference'
import CurrentUserReview from 'src/components/reviews/current-user-review/CurrentUserReview'
import { useParams } from 'react-router-dom'
import NotFoundPage from '../not-found-page/NotFoundPage'
import isRestaurantOpen from 'src/utils/isRestaurantOpen'
import { useEffect } from 'react'
import { fetchMenuItem, fetchMenuItemReviews, fetchRestaurant } from 'src/redux/actions/menuItemReviews.actions'
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications'
import { createMenuItemReview, deleteMenuItemReview, fetchCurrentCustomerMenuItemReview, updateMenuItemReview } from 'src/redux/actions/currentCustomerMenuItemReview.actions'
import './menu_item_reviews.css'
import { MenuItem } from 'src/models/menuItem.interfaces'
import LoadingPage from '../loading-page/LoadingPage'
import useComponentWillMount from 'src/hooks/useComponentWillMount'

const MenuItemReviewsPage = () => {
    const dispatch = useAppDispatch()
    const { restaurantId, menuItemId } = useParams()

    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const { isLoading: isCurrentCustomerMenuItemReviewLoading, review: currentCustomerMenuItemReview, error: currentCustomerMenuItemReviewError } = useAppSelector((state) => state.currentCustomerMenuItemReviewReducer)

    const { isRestaurantLoading, isMenuItemLoading, isReviewsLoading, restaurant, menuItem, reviews, restaurantError, menuItemError, reviewsError: menuItemReviewsError} = useAppSelector((state) => state.menuItemReviewsReducer)

    useComponentWillMount(() => {
        if (restaurantId && menuItemId) {
            dispatch(fetchRestaurant(restaurantId)).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    dispatch(fetchMenuItem(menuItemId)).then((response) => {
                        if (response.meta.requestStatus === 'fulfilled') {
                            dispatch(fetchMenuItemReviews(menuItemId)).then((response) => {
                                // if (response.meta.requestStatus === 'rejected') {
                                //     addErrorNotification(response.payload as string)
                                // }
                            })

                            dispatch(fetchCurrentCustomerMenuItemReview(menuItemId))
                        }

                    })

                }
            })
        }
    })
    
    const handleReviewAdded = async (review: ReviewCreateType) => {
        dispatch(createMenuItemReview({
            ...review,
            itemId: menuItemId
        })).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully created review')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleReviewUpdated = async (review: ReviewUpdateType) => {
        dispatch(updateMenuItemReview(review)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully updated review')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleReviewDeleted = async (review: ReviewType) => {
        dispatch(deleteMenuItemReview(review.id)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully deleted review')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    if (isCurrentCustomerMenuItemReviewLoading || isCurrentUserLoading || isMenuItemLoading || isRestaurantLoading || isReviewsLoading)
        return <LoadingPage/>

    if(!menuItem || !restaurant) {
        return <NotFoundPage/>
    }

    const isOpen = isRestaurantOpen(restaurant)

    return (
        <div className="container menu__item__reviews__container">
            <Navbar currentUser={currentUser}/>
            <div className="menu__item__reviews__wrapper">
                <div className="menu__item__reviews">
                    <div className="menu__item__reviews__references">
                        <RestaurantReference isRestaurantOpen={isOpen} restaurant={restaurant}/>
                        <MenuItemReference menuItem={menuItem}/>
                    </div>
                    <div className="menu__item__reviews__content">
                        {currentUser && currentUser.role === 'customer' &&
                            <div className="menu__item__reviews__current__user">
                                <CurrentUserReview currentUser={currentUser} 
                                                currentUserReview={currentCustomerMenuItemReview}
                                                createTitle={`Leave your review about ${menuItem.name}`}
                                                updateTitle={`Your review about ${menuItem.name}`}
                                                onReviewAdded={handleReviewAdded} 
                                                onReviewUpdated={handleReviewUpdated} 
                                                onReviewDeleted={handleReviewDeleted}/>
                            </div>
                        }
                        <div className="menu__item__reviews__list__wrapper">
                            <h2 className="menu__item__reviews__title">Reviews</h2>
                            <ReviewsList reviews={reviews}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MenuItemReviewsPage