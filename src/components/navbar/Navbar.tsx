import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import LoginButton from './ui/buttons/login-button/LoginButton';
import { AnonymousNavbarProps, CourierNavbarButtonsProps, CustomerNavbarButtonsProps, ModeratorNavbarButtonsProps, NavbarProps, NavbarRightComponentProps, RestaurantManagerNavbarButtonsProps } from './navbar.types';
import OpenOrderCartButton from './ui/buttons/order-cart-button/OpenOrderCartButton';
import ProfileButton from './ui/buttons/profile-button/ProfileButton';
import DropdownMenu from '../dropdown-menu/DropdownMenu';
import InterfaceButton from './ui/buttons/interface-button/InterfaceButton';
import { useCallback } from 'react';
import LogoutButton from './ui/buttons/logout-button/LogoutButton';
import Divider from '../ui/divider/Divider';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

const CustomerNavbarButtons = ({currentUser, onOpenOrderCartButtonClick, onProfileButtonClick, onLogout} : CustomerNavbarButtonsProps) => {
    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <OpenOrderCartButton onClick={onOpenOrderCartButtonClick}/>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <ProfileButton imageUrl={currentUser.imageUrl} onClick={onProfileButtonClick}/>
                <LogoutButton onClick={onLogout}/>
            </div>
        </>
    )
}

const CourierNavbarButtons = ({currentUser, onAvailableOrdersButtonClick, onProfileButtonClick, onLogout}: CourierNavbarButtonsProps) => {
    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <InterfaceButton label='Available Orders' onClick={onAvailableOrdersButtonClick}/>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <ProfileButton imageUrl={currentUser.imageUrl} onClick={onProfileButtonClick}/>
                <LogoutButton onClick={onLogout}/>
            </div>
        </>
    )
}

const RestaurantManagerNavbarButtons = ({currentUser, onRestaurantPanelButtonClick, onRestaurantOrdersButtonClick, onProfileButtonClick, onLogout} : RestaurantManagerNavbarButtonsProps) => {
    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <InterfaceButton label='Restaurant Panel' onClick={onRestaurantPanelButtonClick}/>
                <InterfaceButton label='Restaurant Orders' onClick={onRestaurantOrdersButtonClick}/>
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
                <InterfaceButton label='Moderator Panel' onClick={onModeratorPanelButtonClick}/>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <ProfileButton imageUrl={currentUser.imageUrl} onClick={onProfileButtonClick}/>
                <LogoutButton onClick={onLogout}/>
            </div>
        </>
    )
}

const AnonymousNavbarButtons = ({onOpenOrderCartButtonClick, onLoginButtonClick} : AnonymousNavbarProps) => {

    return (
        <>
            <div className='navbar__buttons__wrapper'>
                <OpenOrderCartButton onClick={onOpenOrderCartButtonClick}/>
                <Divider width='8px' height='auto' color='#CFCFCF'/>
                <LoginButton onClick={onLoginButtonClick}/>
                <DropdownMenu title='Sign up' items={[
                    {
                        label: 'Customer',
                        path: '/profile'
                    },
                    {
                        label: 'Courier',
                        path: '/profile'
                    },
                    {
                        label: 'Restaurant Manager',
                        path: '/profile'
                    }
                ]}/>
            </div>
        </>
    )
}

const Navbar = ({currentUser} : NavbarProps) => {
    const navigate = useNavigate();

    const handleOpenOrderCart = () => {
        console.log('Click!');
    }

    const handleOpenProfile = () => {
        navigate('/profile');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    const handleLogout = async () => {
        console.log('Click!');
    }

    const handleOpenAvailableOrders = () => {
        navigate('/orders/available');
    }

    const handleOpenRestaurantPanel = () => {
        navigate('restaurants/panel');
    }

    const handleOpenRestaurantOrders = () => {
        navigate('/restaurant/orders');
    }

    const handleOpenModeratorPanel = () => {
        navigate('/moderator/panel');
    }

    const renderContent = useCallback(() => {
        if (!currentUser) {
            return <AnonymousNavbarButtons onLoginButtonClick={handleLogin} onOpenOrderCartButtonClick={handleOpenOrderCart}/>
        }

        switch(currentUser.role) {
            case 'customer': 
                return <CustomerNavbarButtons currentUser={currentUser} onOpenOrderCartButtonClick={handleOpenOrderCart} onProfileButtonClick={handleOpenProfile} onLogout={handleLogout}/>
            
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
                <picture>
                    <img src="/images/logo.svg" className="navbar__logo" alt="Logo"/> 
                </picture>
                {renderContent()}
            </div>
        </div>
    )
}

export default Navbar