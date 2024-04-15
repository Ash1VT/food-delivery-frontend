import React from 'react'
import { ReviewProps } from '../reviews.types'
import CustomRating from 'src/components/custom-rating/CustomRating'
import './review.css'

const Review = ({id, userFullName, userImageUrl, ratingValue, text} : ReviewProps) => {

    const handleNotFoundImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = 'images/default_user_logo.svg'
    }

    return (
        <div className="review__container">
            <div className="review__user__details__wrapper">
                <div className="review__user__image__wrapper">
                    <img src={userImageUrl} alt="user" onError={handleNotFoundImage}/>
                </div>
                <div className="review__user__name">
                    {userFullName}
                </div>
            </div>
            <div className="review__rating__wrapper">
                <CustomRating style={{ maxWidth: 100 }} value={ratingValue} readOnly />
            </div>
            {text &&
                <div className="review__text__wrapper">
                    <p className="review__text">{text}</p>
                </div>
            }
        </div>
    )
}

export default Review