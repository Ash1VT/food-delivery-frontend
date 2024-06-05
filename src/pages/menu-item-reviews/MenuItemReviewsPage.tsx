import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import RestaurantReference from 'src/components/restaurant-reference/RestaurantReference'
import { getRestaurant, getRestaurantIsOpen } from '../../redux/selectors/restaurantSelectors'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { getMenuItemCurrentUserReview, getMenuItemReviews,  } from '../../redux/selectors/menuItemReviewsSelectors'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { addReview, deleteReview, updateReview } from '../../redux/reducers/menuItemsReviewsReducer'
import ReviewsList from 'src/components/reviews/reviews-list/ReviewsList'
import { ReviewCreateType, ReviewUpdateType, ReviewType } from 'src/components/reviews/reviews.types'
import { getMenuItem } from '../../redux/selectors/menuSelectors'
import MenuItemReference from 'src/components/menu-item-reference/MenuItemReference'
import CurrentUserReview from 'src/components/reviews/current-user-review/CurrentUserReview'
import { getCurrentUser } from 'src/redux/selectors/currentUserSelectors'
import './menu_item_reviews.css'
import { useParams } from 'react-router-dom'
import NotFoundPage from '../not-found-page/NotFoundPage'

const MenuItemReviewsPage = () => {

    const { restaurantId, menuItemId } = useParams()

    const currentUser = useAppSelector((state) => getCurrentUser(state))
    const currentUserMenuItemReview = useAppSelector((state) => getMenuItemCurrentUserReview(state))

    const restaurant = useAppSelector((state) => getRestaurant(state, restaurantId))
    const isRestaurantOpen = useAppSelector((state) => getRestaurantIsOpen(state, restaurantId))
    
    const menuItem = useAppSelector((state) => getMenuItem(state, restaurantId, menuItemId))

    const reviews = useAppSelector((state) => getMenuItemReviews(state))

    const dispatch = useAppDispatch()

    if(!menuItem || !restaurant) {
        return <NotFoundPage/>
    }
    
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
        <div className="container menu__item__reviews__container">
            <Navbar currentUser={currentUser}/>
            <div className="menu__item__reviews__wrapper">
                <div className="menu__item__reviews">
                    <div className="menu__item__reviews__references">
                        <RestaurantReference isRestaurantOpen={isRestaurantOpen} restaurant={restaurant}/>
                        <MenuItemReference menuItem={menuItem}/>
                    </div>
                    <div className="menu__item__reviews__content">
                        {currentUser &&
                            <div className="menu__item__reviews__current__user">
                                <CurrentUserReview currentUser={currentUser} 
                                                currentUserReview={currentUserMenuItemReview}
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