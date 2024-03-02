import './App.css';
import DeliveryAction from './pages/main/delivery-process/delivery-action/DeliveryAction';
import DeliveryProcessSection from './pages/main/delivery-process/DeliveryProcessSection';
import HeaderSection from './pages/main/header/HeaderSection'
import Navbar from './components/navbar/Navbar';
import PromotionsSection from './pages/main/promotions/PromotionsSection';
import { PromotionRestaurantProps } from './pages/main/promotions/promotions.types';
import PushableButton from './components/ui/buttons/pushable-button/PushableButton';
import { MouseEvent } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PopularItemsSection from './pages/main/popular-items/PopularItemsSection';
import { PopularItemProps } from './pages/main/popular-items/popular_items.types';
import FeaturedRestaurantsSection from './pages/main/featured-restaurants/FeaturedRestaurantsSection';
import { FeaturedRestaurantProps } from './pages/main/featured-restaurants/featured_restaurants.types';
import FoodCategoriesSection from './pages/main/food-categories/FoodCategoriesSection';
import { FoodCategoryProps } from './pages/main/food-categories/food_category.types';
import FeaturesSection from './pages/main/features/FeaturesSection';
import BestDealsSection from './pages/main/best-deals/BestDealsSection';
import { BestDealImageLocation, BestDealProps } from './pages/main/best-deals/best_deals.types';
import Footer from './components/footer';
import { FooterMenuColumnProps } from './components/footer/footer.types';
import MainPage from './pages/main/MainPage';

const App = () => {

    const cities: string[] = [
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
    ]

    const menu_columns: FooterMenuColumnProps[] = [
        {
          title: 'Company',
          items: ['About us', 'Team', 'Careers', 'Blog']
        },
        {
          title: 'Contact',
          items: ['Help & Support', 'Partner with us', 'Ride with us']
        },
        // {
          // title: 'Legal'
        // }
    ]
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello!')
    }

    return (
        <div className="container">
            <div>
                <Navbar/>
                <HeaderSection/>
            </div>
            <MainPage/>
            <Footer cities={cities} cities_per_column={5} menu_columns={menu_columns}/>
        </div>
    );
}

export default App;
