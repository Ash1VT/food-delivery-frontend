import FindFoodButton from './ui/buttons/find-food-button/FindFoodButton';
import AddressInput from './ui/inputs/address-input/AddressInput';
import './header_section.css';
import '@src/App.css'


const HeaderSection = () => {
    const onClick = () => {
        console.log('Click!');
    }

    return (
        <div className="header__container">
            <div className="header__wrapper section__wrapper">
                <div className="header__details__wrapper">
                    <p className="header__title">Are you starving?</p>
                    <p className="header__details">Within a few clicks, find meals that are accessible near you</p>
                    <div className="header__order__card">
                        <div className="header__address__wrapper">
                            <AddressInput placeholder='Enter Your Address'/>
                            <FindFoodButton onClick={onClick}/>
                        </div>
                    </div>
                </div>
                <div className="header__image__wrapper">
                    <img src='food.png' className="header__image"></img>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection