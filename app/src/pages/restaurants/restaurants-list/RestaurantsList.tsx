import Restaurant from '../restaurant/Restaurant'
import { RestaurantsListProps } from '../restaurants_page.types'
import './restaurants_list.css'

const RestaurantsList = ({restaurants}: RestaurantsListProps) => {
    return (
        <div className="restaurants__list">
            {restaurants.map((restaurant) => (
                <Restaurant name={restaurant.name} description={restaurant.description} imageUrl={restaurant.imageUrl} ratingValue={restaurant.ratingValue}/>
            ))}
        </div>
    )
}

export default RestaurantsList;