import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ViewRestaurantsButtonProps } from '../../../featured_restaurants.types';
import './view_restaurants_button.css'


const ViewRestaurantsButton = ({onClick} : ViewRestaurantsButtonProps) => {
    return (
        <div className="button__wrapper view__restaurants__button__wrapper" role="button" onClick={onClick}>
            <div className="button__text view__restaurants__button__text">
                View All
            </div>
            <ArrowForwardIosIcon className="button__icon view__restaurants__button__icon" viewBox='6 2 8 20'/>
        </div>
    )
}

export default ViewRestaurantsButton