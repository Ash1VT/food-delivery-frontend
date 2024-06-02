import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import IUser from 'src/redux/models/IUser'
import { addSuccessNotification } from 'src/utils/notifications'
import Users from './users/Users'
import { getCustomerAddresses, getRestaurantApplications, getUsers } from 'src/redux/selectors/currentModeratorSelectors'
import RestaurantApplications from './restaurant-applications/RestaurantApplications'
import IRestaurantApplication from 'src/redux/models/IRestaurantApplication'
import CustomerAddresses from './customer-addresses/CustomerAddresses'
import ICustomerAddress from 'src/redux/models/ICustomerAddress'
import './moderator_panel_page.css'
import { getCurrentUser } from 'src/redux/selectors/currentUserSelectors'

const ModeratorPanelPage = () => {
    const currentUser = useAppSelector(getCurrentUser)

    const users = useAppSelector(getUsers)
    const restaurantApplications = useAppSelector(getRestaurantApplications)
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

    const handleEmailVerifiedChanged = async (userId: string, isEmailVerified: boolean) => {
        alert('User email verified changed')
        addSuccessNotification(`Successfully ${isEmailVerified ? 'activated' : 'deactivated'} user email verification`)
    }

    const handleActivityChanged = async (userId: string, isActive: boolean) => {
        alert('User activity changed')
        addSuccessNotification(`Successfully ${isActive ? 'activated' : 'deactivated'} user`)
    }

    const handleOpenEditingUser = async (user: IUser) => {
        alert(`Open editing user: ${JSON.stringify(user)}`)
    }

    const handleOpenAddingModerator = async () => {
        alert('Open adding moderator')
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

    const handleOpenShowDetailsApplication = async (application: IRestaurantApplication) => {
        alert(`Open show details application: ${JSON.stringify(application)}`)
    }

    const handleOpenShowDetailsAddress = async (address: ICustomerAddress) => {
        alert(`Open show details address: ${JSON.stringify(address)}`)
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
                            onOpenEditingUser={handleOpenEditingUser}
                            onOpenAddingModerator={handleOpenAddingModerator}/>
                    </div>
                    <div className="moderator__panel__section moderator__panel__applications">
                        <div className='moderator__panel__section__title'>Restaurant Applications</div>

                        <RestaurantApplications
                            applications={restaurantApplications}
                            onOpenShowDetailsApplication={handleOpenShowDetailsApplication}/>
                    </div>
                    <div className="moderator__panel__section moderator__panel__addresses">
                        <div className='moderator__panel__section__title'>Customer Addresses</div>
                        <CustomerAddresses
                            addresses={customerAddresses}
                            onOpenShowDetailsAddress={handleOpenShowDetailsAddress}
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