import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import LoginButton from './ui/buttons/login-button/LoginButton';
import { AnonymousNavbarProps, CourierNavbarButtonsProps, CustomerNavbarButtonsProps, ModeratorNavbarButtonsProps, NavbarProps, NavbarRightComponentProps, RestaurantManagerNavbarButtonsProps } from './navbar.types';
import OpenOrderCartButton from './ui/buttons/order-cart-button/OpenOrderCartButton';
import ProfileButton from './ui/buttons/profile-button/ProfileButton';
import DropdownMenu from '../dropdown-menu/DropdownMenu';
import CustomButton from '../ui/buttons/custom-button/CustomButton';
import { useCallback, useEffect } from 'react';
import LogoutButton from './ui/buttons/logout-button/LogoutButton';
import Divider from '../ui/divider/Divider';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalWindow from '../modal-window/ModalWindow';
import OrderCart from '../order-cart/OrderCart';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';
import { fetchOrderCartItemsFromLocalStorage } from 'src/redux/reducers/orderCartReducer';
import { logout } from 'src/redux/actions/currentUser.actions';
import HomeButton from './ui/buttons/home-button/HomeButton';
import StarIcon from '@mui/icons-material/Star';
import "./navbar.css";
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import { fetchCourierRating } from 'src/redux/actions/currentCourierRating.actions';

const CustomerNavbarButtons = ({currentUser, onProfileButtonClick, onLogout} : CustomerNavbarButtonsProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOrderCartItemsFromLocalStorage())
    }, [])

    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <ModalWindow button={OpenOrderCartButton({})}>
                    <OrderCart currentUser={currentUser}/>
                </ModalWindow>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <ProfileButton imageUrl={currentUser.imageUrl} onClick={onProfileButtonClick}/>
                <LogoutButton onClick={onLogout}/>
            </div>
        </>
    )
}

const CourierNavbarButtons = ({currentUser, onAvailableOrdersButtonClick, onProfileButtonClick, onLogout}: CourierNavbarButtonsProps) => {
    const dispatch = useAppDispatch()
    const { isLoading, rating, error } = useAppSelector(state => state.currentCourierRatingReducer)

    useEffect(() => {
        dispatch(fetchCourierRating(currentUser.id))
    }, [dispatch])

    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <CustomButton label='Available Orders' onClick={onAvailableOrdersButtonClick}/>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <div className='navbar__courier__profile__wrapper'>
                    <ProfileButton imageUrl={currentUser.imageUrl} onClick={onProfileButtonClick}/>
                    {rating &&
                        <div className='navbar__courier__rating'>
                            <StarIcon className="navbar__courier__rating__image" viewBox='8 2 8 20'/>
                            <div className='navbar__courier__rating__value'>{rating.ratingValue.toFixed(2)}</div>
                        </div>
                    }
                </div>
                <LogoutButton onClick={onLogout}/>
            </div>
        </>
    )
}

const RestaurantManagerNavbarButtons = ({currentUser, onRestaurantPanelButtonClick, onRestaurantOrdersButtonClick, onProfileButtonClick, onLogout} : RestaurantManagerNavbarButtonsProps) => {
    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <CustomButton label='Restaurant Panel' onClick={onRestaurantPanelButtonClick}/>
                <CustomButton label='Restaurant Orders' onClick={onRestaurantOrdersButtonClick}/>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <ProfileButton imageUrl={currentUser.imageUrl} onClick={onProfileButtonClick}/>
                <LogoutButton onClick={onLogout}/>
            </div>
        </>
    )
}

const ModeratorNavbarButtons = ({currentUser, onModeratorPanelButtonClick, onProfileButtonClick, onLogout} : ModeratorNavbarButtonsProps) => {
    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <CustomButton label='Moderator Panel' onClick={onModeratorPanelButtonClick}/>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <ProfileButton imageUrl={currentUser.imageUrl} onClick={onProfileButtonClick}/>
                <LogoutButton onClick={onLogout}/>
            </div>
        </>
    )
}

const AnonymousNavbarButtons = ({onLoginButtonClick} : AnonymousNavbarProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOrderCartItemsFromLocalStorage())
    }, [])
    
    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <ModalWindow button={OpenOrderCartButton({})}>
                    <OrderCart currentUser={null}/>
                </ModalWindow>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <LoginButton onClick={onLoginButtonClick}/>
                <DropdownMenu title='Sign up' items={[
                    {
                        label: 'Customer',
                        path: '/register?role=customer'
                    },
                    {
                        label: 'Courier',
                        path: '/register?role=courier'
                    },
                    {
                        label: 'Restaurant Manager',
                        path: '/register?role=restaurant_manager'
                    }
                ]}/>
            </div>
        </>
    )
}

const Navbar = ({currentUser} : NavbarProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch()

    const handleOpenProfile = () => {
        navigate('/profile');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    const handleLogout = async () => {
        dispatch(logout())
    }

    const handleOpenAvailableOrders = () => {
        navigate('/orders/available');
    }

    const handleOpenRestaurantPanel = () => {
        navigate('/restaurants/panel');
    }

    const handleOpenRestaurantOrders = () => {
        navigate('/restaurant/orders');
    }

    const handleOpenModeratorPanel = () => {
        navigate('/moderator/panel');
    }

    const handleHomeButtonClick = () => {
        navigate('/');
    }
 
    const renderContent = useCallback(() => {
        if (!currentUser) {
            return <AnonymousNavbarButtons onLoginButtonClick={handleLogin}/>
        }

        switch(currentUser.role) {
            case 'customer': 
                return <CustomerNavbarButtons currentUser={currentUser} onProfileButtonClick={handleOpenProfile} onLogout={handleLogout}/>
            
            case 'courier': 
                return <CourierNavbarButtons currentUser={currentUser} onAvailableOrdersButtonClick={handleOpenAvailableOrders} onProfileButtonClick={handleOpenProfile} onLogout={handleLogout}/>
            
            case 'restaurant_manager': 
                return <RestaurantManagerNavbarButtons currentUser={currentUser} onRestaurantPanelButtonClick={handleOpenRestaurantPanel} onRestaurantOrdersButtonClick={handleOpenRestaurantOrders} onProfileButtonClick={handleOpenProfile} onLogout={handleLogout}/>
            
            case 'moderator': 
                return <ModeratorNavbarButtons currentUser={currentUser} onModeratorPanelButtonClick={handleOpenModeratorPanel} onProfileButtonClick={handleOpenProfile} onLogout={handleLogout}/>
                
            default: 
                return null;
          
        }
    }, [currentUser?.role]);

    return (
        <div className="navbar__container">
            <div className="navbar__wrapper">
                <picture onClick={handleHomeButtonClick} className='navbar__logo__wrapper'>
                    <img src="/images/logo.svg" className="navbar__logo" alt="Logo"/> 
                </picture>
                {renderContent()}
            </div>
        </div>
    )
}

export default Navbar