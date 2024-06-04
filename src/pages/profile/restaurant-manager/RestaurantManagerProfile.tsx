import React, { useCallback, useState } from 'react'
import IUser from 'src/redux/models/IUser';
import PersonalInformation from '../personal-information/PersonalInformation';
import { addSuccessNotification } from 'src/utils/notifications';
import { CustomerProfileProps, ProfileCategoryClicksContextProps } from '../profile.types';
import ProfileCategoryClicksContext from '../contexts/ProfileCategoryClicksContext';
import ProfileCategory from '../profile-category/ProfileCategory';

const RestaurantManagerProfile = ({currentUser, onPersonalInformationUpdated} : CustomerProfileProps) => {

    const [activeCategoryId, setActiveCategoryId] = useState<number>(0)

    const profileCategoryClicksContext: ProfileCategoryClicksContextProps = {
        profileCategoryClicks: [],
        activeCategoryId,
        setActiveCategoryId
    }
    
    const handleUserImageUploaded = async (userId: string, image: File) => {
        alert('User image uploaded')
        addSuccessNotification('User image successfully uploaded')
    }


    const profileCategories = [
        {
            id: 0,
            name: "Personal Information",
        }
    ]

    const renderContent = useCallback((currentUser: IUser) => {
        if (activeCategoryId === 0) {
            return <PersonalInformation user={currentUser} onPersonalInformationUpdated={onPersonalInformationUpdated} onUserImageUploaded={handleUserImageUploaded}/>
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