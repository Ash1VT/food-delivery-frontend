import React, { useCallback, useEffect, useState } from 'react'
import PersonalInformation from '../personal-information/PersonalInformation';
import DeliveryAddressesCategory from './delivery-addresses-category/DeliveryAddressesCategory';
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications';
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
import { useNavigate } from 'react-router-dom';
import { CustomerAddressCreate } from 'src/models/customerAddress.interfaces';
import { ReviewCreate } from 'src/models/review.interfaces';
import { User } from 'src/models/user.interfaces';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';
import { addOrderReview, fetchCurrentCustomerOrders } from 'src/redux/actions/currentCustomerOrders.actions';
import { createCustomerAddress, fetchCurrentCustomerAddresses } from 'src/redux/actions/currentCustomerAddresses.actions';
import { closeModalWindow } from 'src/utils/closeModalWindow';
import LoadingPage from 'src/pages/loading-page/LoadingPage';

const CustomerProfile = ({currentUser, onUserImageUploaded, onVerificationEmailSent, onPersonalInformationUpdated} : CustomerProfileProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { isLoading: isCustomerAddressesLoading, error: customerAddressesError } = useAppSelector(state => state.currentCustomerAddressesReducer)
    const { isLoading: isCustomerOrdersLoading, error: customerOrdersError } = useAppSelector(state => state.currentCustomerOrdersReducer)

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

    useEffect(() => {
        dispatch(fetchCurrentCustomerOrders()).then((response) => {
            if (response.type === 'currentCustomerOrders/fetchCurrentCustomerOrders/rejected') {
                if (response.payload)
                    addErrorNotification(response.payload as string)
            }
        })

        dispatch(fetchCurrentCustomerAddresses()).then((response) => {
            if (response.type === 'currentCustomerAddresses/fetchCurrentCustomerAddresses/rejected') {
                if (response.payload)
                    addErrorNotification(response.payload as string)
            }
        })
    }, [dispatch])
    
    const handleCustomerAddressCreated = async (customerAddress: CustomerAddressCreate) => {
        dispatch(createCustomerAddress(customerAddress)).then((response) => {
            if (response.type === 'currentCustomerAddresses/createCustomerAddress/fulfilled') {
                addSuccessNotification('Customer address successfully created')
                closeModalWindow()
            }
            
            if (response.type === 'currentCustomerAddresses/createCustomerAddress/rejected') {
                if (response.payload)
                    addErrorNotification(response.payload as string)
            }
        })
    }   

    const handleCourierReviewCreated = async (courierReview: ReviewCreate) => {
        dispatch(addOrderReview(courierReview)).then((response) => {
            if (response.type === 'currentCustomerOrders/addOrderReview/fulfilled') {
                addSuccessNotification('Courier review successfully created')
            }
            
            if (response.type === 'currentCustomerOrders/addOrderReview/rejected') {
                if (response.payload)
                    addErrorNotification(response.payload as string)
            }
        })
    }

    const handleOrderPlaced = async (orderId: string) => {
        navigate(`/orders/${orderId}`)
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

    const renderContent = useCallback((currentUser: User) => {
        if (activeCategoryId === 0)
            return <PersonalInformation user={currentUser} onPersonalInformationUpdated={onPersonalInformationUpdated} onVerificationEmailSent={onVerificationEmailSent} onUserImageUploaded={onUserImageUploaded}/>
            
        if (activeCategoryId === 1) 
            return <DeliveryAddressesCategory currentUser={currentUser} approvedAddresses={approvedAddresses} pendingAddresses={pendingAddresses} rejectedAddresses={rejectedAddresses} onCustomerAddressCreated={handleCustomerAddressCreated}/>
        
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
            return <DeliveredOrdersCategory currentUser={currentUser} orders={deliveredOrders} onCourierReviewCreated={handleCourierReviewCreated}/>
        

    }, [activeCategoryId]);


    if (isCustomerAddressesLoading || isCustomerOrdersLoading)
        return <LoadingPage/>
        
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