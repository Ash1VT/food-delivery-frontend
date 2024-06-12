import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { addSuccessNotification } from 'src/utils/notifications'
import Users from './users/Users'
import { getCustomerAddresses } from 'src/redux/selectors/currentModeratorSelectors'
import RestaurantApplications from './restaurant-applications/RestaurantApplications'
import CustomerAddresses from './customer-addresses/CustomerAddresses'
import { UserCreate, UserUpdate } from 'src/models/user.interfaces'
import { RestaurantApplicationUpdate } from 'src/models/restaurantApplication.interfaces'
import { CustomerAddressUpdate } from 'src/models/customerAddress.interfaces'
import './moderator_panel_page.css'

const ModeratorPanelPage = () => {
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)


    const { isLoading: isUsersLoading, users, error: usersError } = useAppSelector((state) => state.usersReducer)
    const { isLoading: isRestaurantApplicationsLoading, applications: restaurantApplications, error: restaurantApplicationsError} = useAppSelector((state) => state.restaurantApplicationsReducer)
    const customerAddresses = useAppSelector(getCustomerAddresses)

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


    // USERS

    const handleEmailVerifiedChanged = async (userId: string, isEmailVerified: boolean) => {
        alert('User email verified changed')
        addSuccessNotification(`Successfully ${isEmailVerified ? 'activated' : 'deactivated'} user email verification`)
    }

    const handleActivityChanged = async (userId: string, isActive: boolean) => {
        alert('User activity changed')
        addSuccessNotification(`Successfully ${isActive ? 'activated' : 'deactivated'} user`)
    }

    const handleUserUpdated = async (user: UserUpdate) => {
        alert(JSON.stringify(user, null, 2))
        addSuccessNotification('User successfully updated')
    }

    const handleUserImageUploaded = async (userId: string, image: File) => {
        alert('User image uploaded')
        addSuccessNotification('User image successfully uploaded')
    }

    const handleModeratorCreated = async (user: UserCreate) => {
        alert(JSON.stringify(user, null, 2))
        addSuccessNotification('Moderator successfully created')
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
        alert(`Restaurant application approved: ${applicationId}`)
        addSuccessNotification('Restaurant application approved')
    }

    const handleRestaurantApplicationRejected = async (applicationId: string) => {
        alert(`Restaurant application rejected: ${applicationId}`)
        addSuccessNotification('Restaurant application rejected')
    }

    const handleRestaurantApplicationUpdated = async (application: RestaurantApplicationUpdate) => {
        alert(`Restaurant application updated: ${JSON.stringify(application)}`)
        addSuccessNotification('Restaurant application updated')
    }

    // CUSTOMER ADDRESSES

    const handleCustomerAddressUpdated = async (address: CustomerAddressUpdate) => {
        alert(`Customer address updated: ${JSON.stringify(address)}`)
        addSuccessNotification('Customer address updated')
    }

    const handleCustomerAddressApproved = async (addressId: string) => {
        alert(`Customer address approved: ${addressId}`)
        addSuccessNotification('Customer address approved')    
    }

    const handleCustomerAddressRejected = async (addressId: string) => {
        alert(`Customer address rejected: ${addressId}`)
        addSuccessNotification('Customer address rejected')
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
                            addresses={customerAddresses}
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