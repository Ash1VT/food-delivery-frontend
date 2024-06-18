import React from 'react'
import './open_adding_review_button.css'
import { OpenAddingReviewButtonProps } from 'src/pages/profile/profile.types'

const OpenAddingReviewButton = ({isReviewAdded, onOpen} : OpenAddingReviewButtonProps) => {
    return (
        <button className={`button__wrapper open__adding__review__button ${isReviewAdded ? 'open__adding__review__button__disabled' : ''}`} disabled={isReviewAdded} onClick={onOpen}>
            Leave review
        </button>
    )
}

export default OpenAddingReviewButton