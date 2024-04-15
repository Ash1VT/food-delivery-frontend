import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import LoginButton from './ui/buttons/login-button/LoginButton';
import "./navbar.css";

const Navbar = () => {
    
    const onClick = () => {
        console.log('Click!');
    }

    return (
        <div className="navbar__container">
            <div className="navbar__wrapper">
                <picture>
                    <img src="images/logo.svg" className="navbar__logo" alt="Logo"/> 
                </picture>

                <div className="navbar__address">
                    <p className="navbar__address__delivery__text">Deliver to:</p>
                    <PlaceIcon className="navbar__address__icon"/>
                    <p className="navbar__address__text">Mohammadpur Bus Stand, Dhaka</p>
                </div>

                <div className="navbar__right">
                    <div className="navbar__search">
                        <SearchIcon className='navbar__search__logo'/>
                        <p className='navbar__search__text'>Search Food</p>
                    </div>
                    <LoginButton onClick={onClick}/>
                </div>

            </div>
        </div>
    )
}

export default Navbar