import React, { useCallback, useState } from 'react'
import { addSuccessNotification } from 'src/utils/notifications'
import { CourierProfileProps, ProfileCategoryClicksContextProps } from '../profile.types'
import PersonalInformation from '../personal-information/PersonalInformation'
import DeliveredOrdersCategory from './delivered-orders-category/DeliveredOrdersCategory'
import DeliveringOrdersCategory from './delivering-orders-category/DeliveringOrdersCategory'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { getCurrentCourierDeliveringOrders, getCurrentCourierDeliveredOrders } from 'src/redux/selectors/currentCourierSelectors'
import ProfileCategoryClicksContext from '../contexts/ProfileCategoryClicksContext'
import ProfileCategory from '../profile-category/ProfileCategory'
import { User } from 'src/models/user.interfaces'

const CourierProfile = ({currentUser, onUserImageUploaded, onVerificationEmailSent, onPersonalInformationUpdated} : CourierProfileProps) => {
    const deliveringOrders = useAppSelector(getCurrentCourierDeliveringOrders)
    const deliveredOrders = useAppSelector(getCurrentCourierDeliveredOrders)

    const [activeCategoryId, setActiveCategoryId] = useState<number>(0)

    const profileCategoryClicksContext: ProfileCategoryClicksContextProps = {
        profileCategoryClicks: [],
        activeCategoryId,
        setActiveCategoryId
    }
    
    const handleOrderDeliveryFinished = async (orderId: string) => {
        alert('Order delivery finished')
        addSuccessNotification('Order delivery finished')
    }

    const profileCategories = [
        {
            id: 0,
            name: "Personal Information",
        },
        {
            id: 1,
            name: "My Delivering Orders",
        },
        {
            id: 2,
            name: "My Delivered Orders",
        },
    ]

    const renderContent = useCallback((currentUser: User) => {
        if (activeCategoryId === 0) {
            return <PersonalInformation user={currentUser} onVerificationEmailSent={onVerificationEmailSent} onPersonalInformationUpdated={onPersonalInformationUpdated} onUserImageUploaded={onUserImageUploaded}/>
        }
            
        if (activeCategoryId === 1) {
            return <DeliveringOrdersCategory currentUser={currentUser} orders={deliveringOrders} onOrderDeliveryFinished={handleOrderDeliveryFinished}/>
        }
        
        if (activeCategoryId === 2)
            return <DeliveredOrdersCategory currentUser={currentUser} orders={deliveredOrders}/>


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

export default CourierProfile