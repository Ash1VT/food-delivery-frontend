import StarIcon from '@mui/icons-material/Star';
import { FeaturedRestaurantProps } from '../types/restaurant.type';
import '../styles/featured_restaurant.css'


const FeaturedRestaurant = ({restaurant_image_url, restaurant_logo_url, restaurant_name, rating_value, is_opened} : FeaturedRestaurantProps) => {
    return (
        <div className="featured__restaurant__container">
            <div style={{
                backgroundImage: `url(${restaurant_image_url})`,
            }} className="featured__restaurant__food__image__wrapper">
            </div>
            <div className="featured__restaurant__wrapper">
                <div className="featured__restaurant__information">
                    <div style={{
                        backgroundImage: `url(${restaurant_logo_url})`,
                    }} className="featured__restaurant__logo"/>
                    <div className="featured__restaurant__details">
                        <div className="featured__restaurant__name">{restaurant_name}</div>
                        <div className="featured__restaurant__rating__wrapper">
                            <StarIcon className="featured__restaurant__rating__image" viewBox='8 2 8 20'/>
                            <div className="featured__restaurant__rating__value">{rating_value}</div>
                        </div>
                    </div>
                </div>
                <div className={`featured__restaurant__open__information ${is_opened ? 'featured__restaurant__opened' : 'featured__restaurant__closed'}`}>
                    {is_opened ? 
                      'Open Now' :
                      'Opens Tomorrow'}
                </div>
            </div>      
        </div>
    )
}

export default FeaturedRestaurant