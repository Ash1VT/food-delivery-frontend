import './App.css';
import DeliveryAction from './components/delivery/DeliveryAction';
import DeliveryProcessSection from './sections/DeliveryProcessSection';
import HeaderSection from './sections/HeaderSection'
import NavbarSection from './sections/NavbarSection';
import PromotionsSection from './sections/PromotionsSection';
import { PromotionElementProps } from './types/promotion.type';
import PushableButton from './components/buttons/PushableButton';
import { MouseEvent } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PopularItemsSection from './sections/PopularItemsSection';
import { PopularItemProps } from './types/item.type';
import FeaturedRestaurantsSection from './sections/FeaturedRestaurantsSection';
import { FeaturedRestaurantProps } from './types/restaurant.type';
import FoodCategoriesSection from './sections/FoodCategoriesSection';
import { FoodCategoryProps } from './types/food_category.type';
import FeaturesSection from './sections/FeaturesSection';
import BestDealsSection from './sections/BestDealsSection';
import { BestDealImageLocation, BestDealProps } from './types/best_deal.type';
import FooterSection from './sections/FooterSection';
import { FooterMenuColumnProps } from './types/footer.type';
import MainPage from './pages/MainPage';

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
                <NavbarSection/>
                <HeaderSection/>
            </div>
            <MainPage/>
            <FooterSection cities={cities} cities_per_column={5} menu_columns={menu_columns}/>
        </div>
    );
}

export default App;
