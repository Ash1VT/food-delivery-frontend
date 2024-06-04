import React, { useCallback, useState } from 'react'
import IUser from 'src/redux/models/IUser';
import PersonalInformation from '../personal-information/PersonalInformation';
import DeliveryAddressesCategory from './delivery-addresses-category/DeliveryAddressesCategory';
import { addSuccessNotification } from 'src/utils/notifications';
import { CustomerProfileProps, ProfileCategoryClicksContextProps } from '../profile.types';
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import { getCurrentCustomerApprovedAddresses, getCurrentCustomerDeliveredOrders, getCurrentCustomerDeliveringOrders, getCurrentCustomerPendingAddresses, getCurrentCustomerPendingOrders, getCurrentCustomerPlacingOrders, getCurrentCustomerPreparingOrders, getCurrentCustomerReadyOrders, getCurrentCustomerRejectedAddresses } from 'src/redux/selectors/currentCustomerSelectors';
import ProfileCategoryClicksContext from '../contexts/ProfileCategoryClicksContext';
import ProfileCategory from '../profile-category/ProfileCategory';
import PendingOrdersCategory from './pending-orders-category/PendingOrdersCategory';
import PlacingOrdersCategory from './placing-orders-category/PlacingOrdersCategory';
import PreparingOrdersCategory from './preparing-orders-category/PreparingOrdersCategory';
import ReadyOrdersCategory from './ready-orders-category/ReadyOrdersCategory';
import DeliveringOrdersCategory from './delivering-orders-category/DeliveringOrdersCategory';
import DeliveredOrdersCategory from './delivered-orders-category/DeliveredOrdersCategory';

const CustomerProfile = ({currentUser, onPersonalInformationUpdated} : CustomerProfileProps) => {
    const approvedAddresses = useAppSelector(getCurrentCustomerApprovedAddresses)
    const pendingAddresses = useAppSelector(getCurrentCustomerPendingAddresses)
    const rejectedAddresses = useAppSelector(getCurrentCustomerRejectedAddresses)

    const placingOrders = useAppSelector(getCurrentCustomerPlacingOrders)
    const pendingOrders = useAppSelector(getCurrentCustomerPendingOrders)
    const preparingOrders = useAppSelector(getCurrentCustomerPreparingOrders)
    const readyOrders = useAppSelector(getCurrentCustomerReadyOrders)
    const deliveringOrders = useAppSelector(getCurrentCustomerDeliveringOrders)
    const deliveredOrders = useAppSelector(getCurrentCustomerDeliveredOrders)

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

    const handleOpenAddingAddress = () => {
        alert('Open adding address')
    }

    const handleOrderPlaced = async (orderId: string) => {
        alert('Order placed')
        addSuccessNotification('Order placed')
    }

    const handleOpenAddingOrderReview = () => {
        alert('Open adding order review')
    }

    const profileCategories = [
        {
            id: 0,
            name: "Personal Information",
        },
        {
            id: 1,
            name: "Delivery Addresses",
        },
        {
            id: 2,
            name: "My Placing Orders",
        },
        {
            id: 3,
            name: "My Pending Orders",
        },
        {
            id: 4,
            name: "My Preparing Orders",
        },
        {
            id: 5,
            name: "My Ready Orders",
        },
        {
            id: 6,
            name: "My Delivering Orders",
        },
        {
            id: 7,
            name: "My Delivered Orders",
        },
    ]

    const renderContent = useCallback((currentUser: IUser) => {
        if (activeCategoryId === 0) {
            return <PersonalInformation user={currentUser} onPersonalInformationUpdated={onPersonalInformationUpdated} onUserImageUploaded={handleUserImageUploaded}/>
        }
            
        if (activeCategoryId === 1) {
            return <DeliveryAddressesCategory approvedAddresses={approvedAddresses} pendingAddresses={pendingAddresses} rejectedAddresses={rejectedAddresses} onOpenAddingAddress={handleOpenAddingAddress}/>
        }
        
        if (activeCategoryId === 2)
            return <PlacingOrdersCategory currentUser={currentUser} orders={placingOrders} onOrderPlaced={handleOrderPlaced}/>

        if (activeCategoryId === 3)
            return <PendingOrdersCategory currentUser={currentUser} orders={pendingOrders}/>

        if (activeCategoryId === 4)
            return <PreparingOrdersCategory currentUser={currentUser} orders={preparingOrders}/>

        if (activeCategoryId === 5)
            return <ReadyOrdersCategory currentUser={currentUser} orders={readyOrders}/>

        if (activeCategoryId === 6)
            return <DeliveringOrdersCategory currentUser={currentUser} orders={deliveringOrders}/>

        if (activeCategoryId === 7)
            return <DeliveredOrdersCategory currentUser={currentUser} orders={deliveredOrders} onOpenAddingOrderReview={handleOpenAddingOrderReview}/>
        

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

export default CustomerProfile