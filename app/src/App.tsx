import './App.css';
import DeliveryAction from './pages/main/delivery-process/delivery-action/DeliveryAction';
import DeliveryProcessSection from './pages/main/delivery-process/DeliveryProcessSection';
import HeaderSection from './pages/main/header/HeaderSection'
import Navbar from './components/navbar/Navbar';
import PromotionsSection from './pages/main/promotions/PromotionsSection';
import { PromotionElementProps } from './types/promotion.type';
import PushableButton from './components/ui/buttons/PushableButton/PushableButton';
import { MouseEvent } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PopularItemsSection from './pages/main/popular-items/PopularItemsSection';
import { PopularItemProps } from './types/item.type';
import FeaturedRestaurantsSection from './pages/main/featured-restaurants/FeaturedRestaurantsSection';
import { FeaturedRestaurantProps } from './types/restaurant.type';
import FoodCategoriesSection from './pages/main/food-categories/FoodCategoriesSection';
import { FoodCategoryProps } from './types/food_category.type';
import FeaturesSection from './pages/main/features/FeaturesSection';
import BestDealsSection from './pages/main/best-deals/BestDealsSection';
import { BestDealImageLocation, BestDealProps } from './types/best_deal.type';
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
