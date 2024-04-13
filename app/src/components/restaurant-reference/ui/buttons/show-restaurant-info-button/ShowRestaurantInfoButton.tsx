import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ShowRestaurantInfoButtonProps } from 'src/components/restaurant-reference/restaurant_reference.types';
import './show_restaurant_info_button.css'

const ShowRestaurantInfoButton = ({onShowInfoButtonClick} : ShowRestaurantInfoButtonProps) => {
    return (
        <button className="button__wrapper show__restaurant__info__button__wrapper" onClick={onShowInfoButtonClick}>
            <InfoOutlinedIcon className="button__icon show__restaurant__info__button__icon" viewBox='8 2 8 20'/>
        </button>
    )
}

export default ShowRestaurantInfoButton