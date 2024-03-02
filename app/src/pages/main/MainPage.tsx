import DeliveryProcessSection from './delivery-process/DeliveryProcessSection';
import PromotionsSection from './promotions/PromotionsSection';
import PopularItemsSection from './popular-items/PopularItemsSection';
import FeaturedRestaurantsSection from './featured-restaurants/FeaturedRestaurantsSection';
import FoodCategoriesSection from './food-categories/FoodCategoriesSection';
import FeaturesSection from './features/FeaturesSection';
import BestDealsSection from './best-deals/BestDealsSection';
import { BestDealImageLocation, BestDealProps } from './best-deals/best_deals.types';
import { PromotionRestaurantProps } from './promotions/promotions.types';
import { PopularItemProps } from './popular-items/popular_items.types';
import { FeaturedRestaurantProps } from './featured-restaurants/featured_restaurants.types';
import { FoodCategoryProps } from './food-categories/food_category.types';


const MainPage = () => {
    const restaurant_promotions: PromotionRestaurantProps[] = [
        {
          image_url: 'food1.png',
          discount_amount: 15,
          restaurant_name: 'Greys Vage',
          promotion_days_remaining: 5
        },
        {
          image_url: 'food1.png',
          discount_amount: 15,
          restaurant_name: 'Greys Vage',
          promotion_days_remaining: 5
        },
        {
          image_url: 'food1.png',
          discount_amount: 15,
          restaurant_name: 'Greys Vage',
          promotion_days_remaining: 5
        },
        
    ]

    const popular_items: PopularItemProps[] = [
        {
          image_url: 'food2.png',
          name: 'Cheese burger',
          restaurant_name: 'Burger Arena',
          price: 3.14
        },
        {
          image_url: 'food3.png',
          name: "Toffe's Cake",
          restaurant_name: 'Top Sticks',
          price: 4.00
        },
        {
          image_url: 'food4.png',
          name: 'Dancake',
          restaurant_name: 'Cake World',
          price: 1.99
        },
        {
          image_url: 'food5.png',
          name: 'Crispy Sandwitch',
          restaurant_name: 'Fastfood Dine',
          price: 3.00
        },
        {
          image_url: 'food5.png',
          name: 'Crispy Sandwitch',
          restaurant_name: 'Fastfood Dine',
          price: 3.00
        },
    ] 

    const featured_restaurants: FeaturedRestaurantProps[] = [
      {
        restaurant_image_url: 'food2.png',
        restaurant_logo_url: 'restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 44,
        is_opened: true
      },
      {
        restaurant_image_url: 'food3.png',
        restaurant_logo_url: 'restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 44,
        is_opened: true
      },
      {
        restaurant_image_url: 'food2.png',
        restaurant_logo_url: 'restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 44,
        is_opened: true
      },
      {
        restaurant_image_url: 'food2.png',
        restaurant_logo_url: 'restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 44,
        is_opened: true
      },
      {
        restaurant_image_url: 'food2.png',
        restaurant_logo_url: 'restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 44,
        is_opened: true
      },
      {
        restaurant_image_url: 'food2.png',
        restaurant_logo_url: 'restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 44,
        is_opened: true
      },
      {
        restaurant_image_url: 'food2.png',
        restaurant_logo_url: 'restaurant_logo1.png',
        restaurant_name: 'Burger Arena',
        rating_value: 44,
        is_opened: false
      },
    ] 

    const food_categories: FoodCategoryProps[] = [
      {
        image_url: 'pizza.png',
        name: 'Pizza',
      },
      // {
      //   image_url: 'pizza.png',
      //   name: 'Pizza',
      // },
      {
        image_url: 'food3.png',
        name: "Toffe's Cake",
      },
      {
        image_url: 'food4.png',
        name: 'Dancake',
      },
      {
        image_url: 'food5.png',
        name: 'Crispy Sandwitch',
      },
      {
        image_url: 'food5.png',
        name: 'Crispy Sandwitch',
      },
    ] 

    const best_deals: BestDealProps[] = [
      {
        title: 'Best Deals',
        food_name: 'Crispy Sandwiches',
        description: 'Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.',
        image_url: 'sandwich.png',
      },
      {
        title: 'Celebrate parties with',
        food_name: 'Fried Chicken',
        description: 'Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.',
        image_url: 'chicken.png',
      },
      {
        title: 'Wanna eat hot & spicy',
        food_name: 'Pizza?',
        description: 'Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.',
        image_url: 'pizza1.png',
      },
    ] 
    return (
        <>
            <PromotionsSection promotions={restaurant_promotions}/>
            <DeliveryProcessSection/>
            <PopularItemsSection items={popular_items}/>
            <FeaturedRestaurantsSection restaurants={featured_restaurants}/>
            <div>
            <FoodCategoriesSection categories={food_categories}/>
            <FeaturesSection/>
            </div>
            <BestDealsSection best_deals={best_deals} first_deal_image_location={BestDealImageLocation.Left}/>
        </>
    )
}

export default MainPage