import DeliveryProcessSection from './delivery-process';
import PromotionsSection from './promotions';
import PopularItemsSection from './popular-items';
import FeaturedRestaurantsSection from './featured-restaurants';
import FoodCategoriesSection from './food-categories';
import FeaturesSection from './features';
import BestDealsSection from './best-deals';
import { BestDealImageLocation, BestDealProps } from './best-deals/best_deals.types';
import { PromotionRestaurantProps } from './promotions/promotions.types';
import { PopularItemProps } from './popular-items/popular_items.types';
import { FeaturedRestaurantProps } from './featured-restaurants/featured_restaurants.types';
import { FoodCategoryProps } from './food-categories/food_category.types';
import Footer from 'src/components/footer';
import { FooterMenuColumnProps } from 'src/components/footer/footer.types';
import Navbar from 'src/components/navbar';
import HeaderSection from './header';
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import "./main_page.css"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';


const MainPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const handleRestaurantsSearched = async (query: string) => {
        navigate(`/restaurants?address=${query}`)
    }

    useEffect(() => {

    }, [dispatch])

    const restaurant_promotions: PromotionRestaurantProps[] = [
        {
          image_url: 'images/food1.png',
          discount_amount: 15,
          restaurant_name: 'Greys Vage',
          promotion_days_remaining: 5
        },
        {
          image_url: 'images/food4.png',
          discount_amount: 15,
          restaurant_name: 'Greys Vage',
          promotion_days_remaining: 5
        },
        {
          image_url: 'images/food3.png',
          discount_amount: 15,
          restaurant_name: 'Greys Vage',
          promotion_days_remaining: 5
        },
        
    ]

    const popular_items: PopularItemProps[] = [
        {
          image_url: 'images/food2.png',
          name: 'Cheese burger',
          restaurant_name: 'Burger Arena',
          price: 3.14
        },
        {
          image_url: 'images/food3.png',
          name: "Toffe's Cake",
          restaurant_name: 'Top Sticks',
          price: 4.00
        },
        {
          image_url: 'images/food4.png',
          name: 'Dancake',
          restaurant_name: 'Cake World',
          price: 1.99
        },
        {
          image_url: 'images/food5.png',
          name: 'Crispy Sandwitch',
          restaurant_name: 'Fastfood Dine',
          price: 3.00
        },
        {
          image_url: 'images/food5.png',
          name: 'Crispy Sandwitch',
          restaurant_name: 'Fastfood Dine',
          price: 3.00
        },
    ] 

    const featured_restaurants: FeaturedRestaurantProps[] = [
      {
        restaurant_image_url: 'images/food2.png',
        restaurant_logo_url: 'images/restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 4.9,
        is_opened: true
      },
      {
        restaurant_image_url: 'images/food3.png',
        restaurant_logo_url: 'images/restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 4.7,
        is_opened: true
      },
      {
        restaurant_image_url: 'images/food2.png',
        restaurant_logo_url: 'images/restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 4.4,
        is_opened: true
      },
      {
        restaurant_image_url: 'images/food2.png',
        restaurant_logo_url: 'images/restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 4.1,
        is_opened: true
      },
    ] 

    return (
        <div className="container main__container">
            <div>
                <Navbar currentUser={currentUser}/>
                <HeaderSection onRestaurantsSearched={handleRestaurantsSearched}/>
            </div>
            <PromotionsSection promotions={restaurant_promotions}/>
            <DeliveryProcessSection/>
            <PopularItemsSection items={popular_items}/>
            <FeaturedRestaurantsSection restaurants={featured_restaurants}/>
            <div>
              <FeaturesSection/>
              <Footer/>
            </div>
        </div>
    )
}

export default MainPage