import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <div className="navbar__wrapper">
            <div className="navbar__logo">
                <img src="logo.svg" alt="Logo"/> 
            </div>
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
                <div className="navbar__login">
                    <PersonIcon className="navbar__login__logo"/>
                    <p className="navbar__login__text">Login</p>
                </div> 
            </div>
        </div>
    )
}

export default Navbar;