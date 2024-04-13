import Footer from "src/components/footer"
import Navbar from "src/components/navbar"
import { useAppSelector } from "src/hooks/redux/useAppSelector"
import { getRestaurant } from "../restaurants/redux/selectors"
import RestaurantReference from "src/components/restaurant-reference/RestaurantReference"
import './restaurant_reviews.css'

const RestaurantReviewsPage = () => {

    const restaurantId = '1'

    const restaurant = useAppSelector((state) => getRestaurant(state, restaurantId))

    return (
        <div className="container restaurant__reviews__container">
            <Navbar/>
            <div className="restaurant__reviews__wrapper">
                <RestaurantReference {...restaurant}/>
            </div>
            <Footer/>
        </div>
    )
}

export default RestaurantReviewsPage