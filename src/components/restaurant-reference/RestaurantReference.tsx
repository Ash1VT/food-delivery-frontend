import { RestaurantReferenceProps } from './restaurant_reference.types'
import ShowRestaurantRatingButton from './ui/buttons/show-restaurant-rating-button/ShowRestaurantRatingButton'
import ShowRestaurantInfoButton from './ui/buttons/show-restaurant-info-button/ShowRestaurantInfoButton';
import Popup from 'reactjs-popup'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';
import ShowRestaurantWorkingHoursButton from './ui/buttons/show-restaurant-working-hours-button/ShowRestaurantWorkingHoursButton';
import './restaurant_reference.css'
import findWorkingHours from 'src/utils/findWorkingHours';

const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const RestaurantReference = ({restaurant, isRestaurantOpen} : RestaurantReferenceProps) => {
    const navigate = useNavigate()

    const handleShowRestaurantRatingButtonClick = () => {
        navigate(`/restaurants/${restaurant.id}/reviews`)
    }

    return (
        <div className="restaurant__reference__container">
            <div className="restaurant__reference__image__wrapper" style={{backgroundImage: `url(${restaurant.imageUrl})`}}>
                <div className="restaurant__reference__gradient"></div>
                <div className="restaurant__reference__details">
                    <div className="restaurant__reference__name">
                        {restaurant.name}
                    </div>
                    <div className="restaurant__reference__buttons">
                        <Popup arrow={false} position={['bottom center', 'left top']} trigger={ShowRestaurantInfoButton({})}>
                            <div className="restaurant__reference__information__wrapper">
                                <h3 className="restaurant__reference__information__name">{restaurant.name}</h3>
                                <p className="restaurant__reference__information__field restaurant__reference__information__description">{restaurant.description}</p>
                                <p className="restaurant__reference__information__field restaurant__reference__information__phone">{restaurant.phone}</p>
                                <p className="restaurant__reference__information__field restaurant__reference__information__email">{restaurant.email}</p>
                                <p className="restaurant__reference__information__field restaurant__reference__information__address">{restaurant.address}</p>
                            </div>
                        </Popup>
                        <ShowRestaurantRatingButton ratingValue={restaurant.ratingValue ? restaurant.ratingValue : 0} reviewsCount={restaurant.reviewsCount} onShowRatingButtonClick={handleShowRestaurantRatingButtonClick}/>
                        <Popup arrow={false} position={['bottom center', 'left top']} trigger={ShowRestaurantWorkingHoursButton({isOpen: isRestaurantOpen})}>
                            <div className="restaurant__reference__working__hours__wrapper">
                                <table>
                                    {dayLabels.map(day => {
                                        const workingHours = findWorkingHours(restaurant.workingHours, day.toLowerCase())
                                        return (
                                            <tr key={day}>
                                                <td>
                                                    <div className='restaurant__reference__working__hours__label'>
                                                        {day}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="restaurant__reference__working__hours__text">
                                                        {workingHours ? `${workingHours.openingTime} - ${workingHours.closingTime}` : 'Day off'}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        </Popup>
                    </div>

                </div>
            </div>
        </div>
    )   
}

export default RestaurantReference