import React from 'react'
import { BackToRestaurantsButtonProps } from 'src/pages/menu/menu_page.types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './back_to_restaurants_button.css'

const BackToRestaurantsButton = ({onBackToRestaurants} : BackToRestaurantsButtonProps) => {
    return (
        <button className="button__wrapper back__to__restaurants__button__wrapper" onClick={onBackToRestaurants}>
            <ArrowBackIcon className='button__icon'/>
            <span className="button__text back__to__restaurants__button__text">Back to restaurants</span>
        </button>
    )
}

export default BackToRestaurantsButton