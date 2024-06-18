import Restaurant from '../restaurant/Restaurant'
import { RestaurantsListProps } from '../restaurants_page.types'
import './restaurants_list.css'

const RestaurantsList = ({restaurants, onRestaurantClick}: RestaurantsListProps) => {
    return (
        <div className="restaurants__list">
            {restaurants.map((restaurant) => (
                <Restaurant key={restaurant.id} restaurant={restaurant} onRestaurantClick={onRestaurantClick}/>
            ))}
        </div>
    )
}

export default RestaurantsList;