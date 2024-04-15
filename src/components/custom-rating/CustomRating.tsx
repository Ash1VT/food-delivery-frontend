import { Rating, Star } from '@smastrom/react-rating'
import { CustomRatingProps } from './custom_rating.types'

const ratingStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#f0e385'
}

const CustomRating = (props : CustomRatingProps) => {
    return (
        <Rating itemStyles={ratingStyles} {...props}/>
    )
}

export default CustomRating