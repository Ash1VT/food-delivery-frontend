import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ShowRestaurantWorkingHoursButtonProps } from 'src/components/restaurant-reference/restaurant_reference.types';
import './show_restaurant_working_hours_button.css'

const ShowRestaurantWorkingHoursButton = ({isOpen, onShowWorkingHoursButtonClick} : ShowRestaurantWorkingHoursButtonProps) => {
    return (
        <button className={`button__wrapper show__working__hours__button__wrapper ${isOpen ? 'show__working__hours__button__open' : 'show__working__hours__button__closed'}`} onClick={onShowWorkingHoursButtonClick}>
            <AccessTimeIcon className="button__icon show__working__hours__button__icon" viewBox='8 2 8 20' />
            <div className="button__text show__working__hours__button__text">{isOpen ? 'Open' : 'Closed'}</div>
        </button>
    )
}

export default ShowRestaurantWorkingHoursButton