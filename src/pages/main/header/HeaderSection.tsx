import FindFoodButton from './ui/buttons/find-food-button/FindFoodButton';
import AddressInput from './ui/inputs/address-input/AddressInput';
import './header_section.css';
import { useState } from 'react';
import { HeaderSectionProps } from '../main_page.types';


const HeaderSection = ({onRestaurantsSearched} : HeaderSectionProps) => {
    const [address, setAddress] = useState('')

    const handleAddressSearched = () => {
        onRestaurantsSearched(address)
    }

    return (
        <div className="header__container" style={
            {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/fooddelivery-21854.appspot.com/o/Images%2Fbackground.png?alt=media&token=87b654d5-b077-48c8-a189-3c33a65ae19b)`}
            }>
            <div className="header__wrapper section__wrapper">
                <div className="header__details__wrapper">
                    <p className="header__title">Are you starving?</p>
                    <p className="header__details">Within a few clicks, find meals that are accessible near you</p>
                    <div className="header__order__card">
                        <div className="header__address__wrapper">
                            <AddressInput className="header__address__input" 
                                          value={address} 
                                          setValue={setAddress} 
                                          placeholder='Enter Your Address'/>
                            <FindFoodButton onClick={handleAddressSearched}/>
                        </div>
                    </div>
                </div>
                <div className="header__image__wrapper">
                    <img src='https://firebasestorage.googleapis.com/v0/b/fooddelivery-21854.appspot.com/o/Images%2Ffood.png?alt=media&token=ae56818e-f96f-4c01-99eb-1e0b639075f6' className="header__image"></img>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection