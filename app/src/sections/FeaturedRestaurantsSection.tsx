import FeaturedRestaurant from '../components/FeaturedRestaurant'
import { FeaturedRestaurantsSectionProps } from '../types/restaurant.type'
import ViewRestaurantsButton from '../components/buttons/ViewRestaurantsButton'

import '../styles/sections/featured_restaurants_section.css'
import '../App.css'

const FeaturedRestaurantsSection = ({restaurants} : FeaturedRestaurantsSectionProps) => {
    return (
        <div className="featured__restaurants__container">
            <div className="featured__restaurants__wrapper section__wrapper">
                <div className="section__title featured__restaurants__title">
                    Featured Restaurants
                </div>
                <div className="featured__restaurants__list section__list">
                    {restaurants.map((restaurant) => {
                        return <FeaturedRestaurant restaurant_image_url={restaurant.restaurant_image_url} 
                                                    restaurant_logo_url={restaurant.restaurant_logo_url}
                                                    restaurant_name={restaurant.restaurant_name}
                                                    rating_value={restaurant.rating_value}
                                                    is_opened={restaurant.is_opened}/>
                    })}
                </div>
                <div className="featured__restaurants__buttons__wrapper">
                    <ViewRestaurantsButton/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedRestaurantsSection