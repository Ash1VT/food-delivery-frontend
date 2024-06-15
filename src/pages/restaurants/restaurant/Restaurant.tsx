import StarIcon from '@mui/icons-material/Star'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Popup from 'reactjs-popup'
import { useState } from 'react';
import { RestaurantProps } from '../restaurants_page.types';
import './restaurant.css'

const Restaurant = ({restaurant, onRestaurantClick} : RestaurantProps) => {
    const [isRestaurantHovered, setIsRestaurantHovered] = useState(false);

    const handleRestaurantClick = () => {
        onRestaurantClick(restaurant.id);
    }

    return (
        <div className="restaurant__container">
            <div className={`restaurant__image ${isRestaurantHovered ? 'restaurant__image__hovered' : ''}`} 
                 onMouseOver={() => setIsRestaurantHovered(true)} 
                 onMouseOut={() => setIsRestaurantHovered(false)} 
                 onClick={handleRestaurantClick}>
                <img src={restaurant.imageUrl} alt="image" />
            </div>
            <div className="restaurant__details">
                <div className="restaurant__details__header">
                    <h3 className="restaurant__name__text" 
                        onMouseOver={() => setIsRestaurantHovered(true)} 
                        onMouseOut={() => setIsRestaurantHovered(false)} 
                        onClick={handleRestaurantClick}>
                        {restaurant.name}
                    </h3>
                    <Popup arrow={false} position={['bottom center', 'left top']} trigger={<InfoOutlinedIcon className="restaurant__description__icon" viewBox='8 2 8 20'/>}>
                        <div className="restaurant__description__wrapper">
                            <h3 className="restaurant__description__title">
                                Description
                            </h3>
                            <p className="restaurant__description__text">
                                {restaurant.description}
                            </p>
                        </div>
                    </Popup>
                </div>
                {restaurant.ratingValue &&
                    <div className="restaurant__rating__wrapper">
                        <StarIcon className="restaurant__rating__icon" viewBox='8 2 8 20'/>
                        <p className="restaurant__rating__value">{restaurant.ratingValue.toFixed(2)}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Restaurant