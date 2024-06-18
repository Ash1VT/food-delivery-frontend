import { ReviewsListProps } from '../reviews.types'
import Review from '../review/Review'
import './reviews_list.css'
import { useCallback } from 'react'

const ReviewsList = ({reviews} : ReviewsListProps) => {

    const renderReviews = useCallback(() => {
        if (!reviews || reviews.length === 0) {
            return (
                <div className='reviews__no__reviews'>
                    No reviews are available now.
                </div>
            )
        }

        return reviews.map((review) => {
            return (
                <Review
                    key={review.id}
                    {...review}
                />
            )
        })
    }, [reviews])

    return (
        <div className="reviews__list">
            {renderReviews()}
        </div>
    )
}

export default ReviewsList