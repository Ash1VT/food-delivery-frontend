import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications'
import Users from './users/Users'
import RestaurantApplications from './restaurant-applications/RestaurantApplications'
import CustomerAddresses from './customer-addresses/CustomerAddresses'
import { ModeratorCreate, UserCreate, UserUpdate } from 'src/models/user.interfaces'
import { RestaurantApplicationUpdate } from 'src/models/restaurantApplication.interfaces'
import { CustomerAddressUpdate } from 'src/models/customerAddress.interfaces'
import { useEffect } from 'react'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { changeUserActiveStatus, changeUserEmailVerififiedStatus, createModerator, fetchUsers, updateUser, uploadUserImage } from 'src/redux/actions/users.actions'
import { confirmRestaurantApplication, declineRestaurantApplication, fetchRestaurantsApplications, updateRestaurantApplication } from 'src/redux/actions/restaurantApplications.actions'
import { approveCustomerAddress, fetchCustomersAddresses, rejectCustomerAddress, updateCustomerAddress } from 'src/redux/actions/customerAddresses.actions'
import './moderator_panel_page.css'
import LoadingPage from '../loading-page/LoadingPage'

const ModeratorPanelPage = () => {
    const dispatch = useAppDispatch()
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)


    const { isLoading: isUsersLoading, users, error: usersError } = useAppSelector((state) => state.usersReducer)
    const { isLoading: isRestaurantApplicationsLoading, applications: restaurantApplications, error: restaurantApplicationsError} = useAppSelector((state) => state.restaurantApplicationsReducer)
    const { isLoading: isCustomerAddressesLoading, addresses: customersAddresses, error: customerAddressesError } = useAppSelector((state) => state.customerAddressesReducer)

    const filterRoles = [
        {
            label: 'Customer',
            value: 'CUSTOMER'
        },
        {
            label: 'Courier',
            value: 'COURIER'
        },
        {
            label: 'Restaurant Manager',
            value: 'RESTAURANT_MANAGER'
        },
        {
            label: 'Moderator',
            value: 'MODERATOR'
        },
    ]

    const filterIsEmailVerified = [
        {
            label: 'Yes',
            value: 'true'
        },
        {
            label: 'No',
            value: 'false'
        },
    ]

    const filterIsActive = [
        {
            label: 'Yes',
            value: 'true'
        },
        {
            label: 'No',
            value: 'false'
        },
    ]

    useEffect(() => {
        dispatch(fetchUsers()).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                dispatch(fetchCustomersAddresses()).then((response) => {
                    if (response.meta.requestStatus === 'rejected') {
                        addErrorNotification(response.payload as string)
                    }
                })
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })

        dispatch(fetchRestaurantsApplications()).then((response) => {
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }, [dispatch])


    // USERS

    const handleEmailVerifiedChanged = async (userId: string, isEmailVerified: boolean) => {
        dispatch(changeUserEmailVerififiedStatus({id: userId, isEmailVerified})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification(`Successfully ${isEmailVerified ? 'activated' : 'deactivated'} user email verification`)
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleActivityChanged = async (userId: string, isActive: boolean) => {
        dispatch(changeUserActiveStatus({id: userId, isActive})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification(`Successfully ${isActive ? 'activated' : 'deactivated'} user`)
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleUserUpdated = async (user: UserUpdate) => {
        dispatch(updateUser(user)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('User successfully updated')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleUserImageUploaded = async (userId: string, image: File) => {
        dispatch(uploadUserImage({id: userId, image})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('User image successfully uploaded')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleModeratorCreated = async (user: ModeratorCreate) => {
        dispatch(createModerator(user)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Moderator successfully created')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleSearchUsers = async (query: string) => {
        alert(`Search users: ${query}`)
    }

    const handleFilteredRoles = async (value: string) => {
        alert(`Filtered roles: ${value}`)
    }

    const handleFilteredIsEmailVerified = async (value: string) => {
        alert(`Filtered is email verified: ${value}`)
    }

    const handleFilteredIsActive = async (value: string) => {
        alert(`Filtered is active: ${value}`)
    }

    // RESTAURANT APPLICATIONS

    const handleRestaurantApplicationApproved = async (applicationId: string) => {
        dispatch(confirmRestaurantApplication(applicationId)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Restaurant application approved')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleRestaurantApplicationRejected = async (applicationId: string) => {
        dispatch(declineRestaurantApplication(applicationId)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Restaurant application rejected')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleRestaurantApplicationUpdated = async (application: RestaurantApplicationUpdate) => {
        dispatch(updateRestaurantApplication(application)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Restaurant application updated')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    // CUSTOMER ADDRESSES

    const handleCustomerAddressUpdated = async (address: CustomerAddressUpdate) => {
        dispatch(updateCustomerAddress(address)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Customer address updated')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleCustomerAddressApproved = async (addressId: string) => {
        dispatch(approveCustomerAddress(addressId)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Customer address approved')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })  
    }

    const handleCustomerAddressRejected = async (addressId: string) => {
        dispatch(rejectCustomerAddress(addressId)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Customer address rejected')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleSearchAddressesByCustomer = async (query: string) => {
        alert(`Search addresses by customer: ${query}`)
    }

    const handleSearchAddressesByCountry = async (query: string) => {
        alert(`Search addresses by country: ${query}`)
    }

    const handleSearchAddressesByRegion = async (query: string) => {
        alert(`Search addresses by region: ${query}`)
    }

    const handleSearchAddressesByDetails = async (query: string) => {
        alert(`Search addresses by details: ${query}`)
    }

    if (isCurrentUserLoading || isCustomerAddressesLoading || isRestaurantApplicationsLoading || isUsersLoading)
        return <LoadingPage/>

    return (
        <div className="container moderator__panel__container">
            <Navbar currentUser={currentUser}/>
            <div className='moderator__panel__wrapper'>
                <div className="moderator__panel__sections__wrapper">
                    <div className='moderator__panel__section moderator__panel__users'>
                        <div className='moderator__panel__section__title'>Users</div>
                        <Users
                            users={users}
                            filterRoles={filterRoles}
                            filterIsEmailVerified={filterIsEmailVerified}
                            filterIsActive={filterIsActive}
                            onFilteredRoles={handleFilteredRoles}
                            onFilteredEmailVerified={handleFilteredIsEmailVerified}
                            onFilteredIsActive={handleFilteredIsActive}
                            onSearchUsers={handleSearchUsers}
                            onEmailVerifiedChanged={handleEmailVerifiedChanged}
                            onActivityChanged={handleActivityChanged}
                            onModeratorCreated={handleModeratorCreated}
                            onUserUpdated={handleUserUpdated}
                            onUserImageUploaded={handleUserImageUploaded}/>
                    </div>
                    <div className="moderator__panel__section moderator__panel__applications">
                        <div className='moderator__panel__section__title'>Restaurant Applications</div>

                        <RestaurantApplications
                            applications={restaurantApplications}
                            onRestaurantApplicationApproved={handleRestaurantApplicationApproved}
                            onRestaurantApplicationRejected={handleRestaurantApplicationRejected}
                            onRestaurantApplicationUpdated={handleRestaurantApplicationUpdated}/>
                    </div>
                    <div className="moderator__panel__section moderator__panel__addresses">
                        <div className='moderator__panel__section__title'>Customer Addresses</div>
                        <CustomerAddresses
                            addresses={customersAddresses}
                            onCustomerAddressApproved={handleCustomerAddressApproved}
                            onCustomerAddressRejected={handleCustomerAddressRejected}
                            onCustomerAddressUpdated={handleCustomerAddressUpdated}
                            onSearchAddressesByCustomer={handleSearchAddressesByCustomer}
                            onSearchAddressesByCountry={handleSearchAddressesByCountry}
                            onSearchAddressesByRegion={handleSearchAddressesByRegion}
                            onSearchAddressesByDetails={handleSearchAddressesByDetails}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ModeratorPanelPage