import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './view_restaurants_button.css'


const ViewRestaurantsButton = () => {
    return (
        <div className="button__wrapper view__restaurants__button__wrapper" role="button">
            <div className="button__text view__restaurants__button__text">
                View All
            </div>
            <ArrowForwardIosIcon className="button__icon view__restaurants__button__icon" viewBox='6 2 8 20'/>
        </div>
    )
}

export default ViewRestaurantsButton