import { ReactNotifications } from 'react-notifications-component';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import MainPage from './pages/main/MainPage';
import MenuItemReviewsPage from './pages/menu-item-reviews/MenuItemReviewsPage';
import MenuPage from './pages/menu/MenuPage';
import ProfilePage from './pages/profile';
import RestaurantReviewsPage from './pages/restaurant-reviews/RestaurantReviewsPage';
import RestaurantsPage from './pages/restaurants/RestaurantsPage';
import OrderPlacingPage from './pages/order-placing-page/OrderPlacingPage';
import ManagerPanelPage from './pages/manager-panel/ManagerPanelPage';
import ModeratorPanelPage from './pages/moderator-panel/ModeratorPanelPage';
import RestaurantOrdersPage from './pages/restaurant-orders/RestaurantOrdersPage';
import AvailableOrdersPage from './pages/available-orders/AvailableOrdersPage';
import './styles/App.css';
import './styles/buttons.css';
import './styles/popup.css';
import './styles/values.css'
import './styles/labels.css'
import '@smastrom/react-rating/style.css';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.compat.css'
import 'react-phone-input-2/lib/style.css'

const App = () => {
    return (
        <>
            <ReactNotifications/>
            <ProfilePage/>
        </>
    )
}

export default App;