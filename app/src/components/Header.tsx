import '../styles/header.css';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const onClick = () => {
        console.log('Click!');
    }

    return (
        <div className="header__wrapper">
            <div className="header__container">
                <p className="header__title">Are you starving?</p>
                <p className="header__details">Within a few clicks, find meals that are accessible near you</p>
                <div className="header__order__card">
                    <div className="header__address__wrapper">
                        <div className="header__address__text__wrapper">
                            <PlaceIcon className="header__address__text__icon"/>
                            <input className="header__address__text" placeholder="Enter Your Address"></input>
                        </div>
                        <div onClick={onClick} 
                             role="button" 
                             className="header__address__button__wrapper"
                             tabIndex={0}>
                            <SearchIcon className="header__address__button__icon"/>
                            <p className="header__address__button__text">Find Food</p>
                        </div>
                    </div>
                </div>
            <div className=""></div>
            </div>
            {/* <div className='header__strong__shadow'/> */}

        </div>
    )
}

export default Header;