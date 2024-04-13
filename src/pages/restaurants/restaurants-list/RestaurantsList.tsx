import Restaurant from '../restaurant/Restaurant'
import { RestaurantsListProps } from '../restaurants_page.types'
import './restaurants_list.css'

const RestaurantsList = ({restaurants}: RestaurantsListProps) => {
    return (
        <div className="restaurants__list">
            {restaurants.map((restaurant) => (
                <Restaurant key={restaurant.id} {...restaurant}/>
            ))}
        </div>
    )
}

export default RestaurantsList;