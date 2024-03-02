import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './view_restaurants_button.css'


const ViewRestaurantsButton = () => {
    return (
        <div className="view__restaurants__button__wrapper" role="button">
            <div className="view__restaurants__button__text">
                View All
            </div>
            <ArrowForwardIosIcon className="view__restaurants__button__icon" viewBox='6 2 8 20'/>
        </div>
    )
}

export default ViewRestaurantsButton