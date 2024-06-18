import StarIcon from '@mui/icons-material/Star'
import './show_restaurant_rating_button.css'
import { ShowRestaurantRatingButtonProps } from 'src/components/restaurant-reference/restaurant_reference.types'

const ShowRestaurantRatingButton = ({ratingValue, reviewsCount, onShowRatingButtonClick} : ShowRestaurantRatingButtonProps) => {
    return (
        <button className="button__wrapper show__restaurant__rating__button__wrapper" onClick={onShowRatingButtonClick}>
            <StarIcon viewBox='8 2 8 20'/>
            <div className="rating__details__wrapper">
                <div className="rating__details__value">{ratingValue.toFixed(2)}</div>
                <div className="rating__details__reviews__count">{reviewsCount}</div>

            </div>
        </button>
    )
}

export default ShowRestaurantRatingButton