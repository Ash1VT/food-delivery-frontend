import React, { useCallback, useState } from 'react'
import PersonalInformation from '../personal-information/PersonalInformation';
import { addSuccessNotification } from 'src/utils/notifications';
import { CustomerProfileProps, ProfileCategoryClicksContextProps, RestaurantManagerProfileProps } from '../profile.types';
import ProfileCategoryClicksContext from '../contexts/ProfileCategoryClicksContext';
import ProfileCategory from '../profile-category/ProfileCategory';
import { User } from 'src/models/user.interfaces';

const RestaurantManagerProfile = ({currentUser, onUserImageUploaded, onVerificationEmailSent, onPersonalInformationUpdated} : RestaurantManagerProfileProps) => {

    const [activeCategoryId, setActiveCategoryId] = useState<number>(0)

    const profileCategoryClicksContext: ProfileCategoryClicksContextProps = {
        profileCategoryClicks: [],
        activeCategoryId,
        setActiveCategoryId
    }
    
    const profileCategories = [
        {
            id: 0,
            name: "Personal Information",
        }
    ]

    const renderContent = useCallback((currentUser: User) => {
        if (activeCategoryId === 0) {
            return <PersonalInformation user={currentUser} onPersonalInformationUpdated={onPersonalInformationUpdated} onVerificationEmailSent={onVerificationEmailSent} onUserImageUploaded={onUserImageUploaded}/>
        }
    }, [activeCategoryId]);

    return (
        <div className="profile__card">
            <div className="profile__category__list">
                <ProfileCategoryClicksContext.Provider value={profileCategoryClicksContext}>
                    {profileCategories.map((category) => (
                        <ProfileCategory key={category.id} id={category.id} name={category.name}/>
                    ))}
                </ProfileCategoryClicksContext.Provider>
            </div>
            <div className="profile__category__content">
                {renderContent(currentUser)}
            </div>
        </div>

    )
}

export default RestaurantManagerProfile