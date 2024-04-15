import { ReviewsListProps } from '../reviews.types'
import Review from '../review/Review'
import './reviews_list.css'

const ReviewsList = ({reviews} : ReviewsListProps) => {
    return (
        <div className="reviews__list">
            {reviews.map((review) => {
                return (
                    <Review
                        key={review.id}
                        {...review}
                    />
                )
            })}
        </div>
    )
}

export default ReviewsList