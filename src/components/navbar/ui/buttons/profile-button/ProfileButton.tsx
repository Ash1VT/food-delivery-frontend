import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ProfileButtonProps } from 'src/components/navbar/navbar.types';
import './profile_button.css'

const ProfileButton = ({imageUrl, onClick} : ProfileButtonProps) => {
    const handleNotFoundImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = 'images/default_user_logo.svg'
    }

    return (
        <button className="button__wrapper profile__button" onClick={onClick}>
            <div className="profile__image__wrapper">
                <img src={imageUrl} alt="user" onError={handleNotFoundImage}/>
            </div>
            {/* <AccountCircleIcon className="button__icon profile__button__icon" viewBox='8 2 8 20'/> */}
        </button>
    )
}

export default ProfileButton