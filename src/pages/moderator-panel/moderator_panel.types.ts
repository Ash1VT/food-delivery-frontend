import { SelectOption } from "src/components/ui/select-component/select_component.types"
import { CustomerAddress, CustomerAddressUpdate } from "src/models/customerAddress.interfaces"
import { RestaurantApplication, RestaurantApplicationUpdate } from "src/models/restaurantApplication.interfaces"
import { ModeratorCreate, User, UserCreate, UserUpdate } from "src/models/user.interfaces"

// USERS

export type UserProps = {
    user: User
    onEmailVerifiedChanged: (id: string, isEmailVerified: boolean) => Promise<void>
    onActivityChanged: (id: string, isActive: boolean) => Promise<void>
    onUserUpdated: (user: UserUpdate) => Promise<void>
    onUserImageUploaded: (id: string, image: File) => Promise<void>
}

export type UsersProps = {
    users: User[]
    filterRoles: SelectOption[]
    filterIsEmailVerified: SelectOption[]
    filterIsActive: SelectOption[]

    onSearchUsers: (query: string) => Promise<void>
    onFilteredRoles: (value: string) => Promise<void>
    onFilteredEmailVerified: (value: string) => Promise<void>
    onFilteredIsActive: (value: string) => Promise<void>

    onEmailVerifiedChanged: (id: string, isEmailVerified: boolean) => Promise<void>
    onActivityChanged: (id: string, isActive: boolean) => Promise<void>

    onUserUpdated: (user: UserUpdate) => Promise<void>
    onUserImageUploaded: (id: string, image: File) => Promise<void>
    onModeratorCreated: (user: ModeratorCreate) => Promise<void>
}

export type AddModeratorModalProps = {
    onModeratorCreated: (user: ModeratorCreate) => Promise<void>
}

export type EditUserModalProps = {
    user: User
    onUserUpdated: (user: UserUpdate) => Promise<void>
    onUserImageUploaded: (id: string, image: File) => Promise<void>
}


// RESTAURANT APPLICATIONS

export type RestaurantApplicationProps = {
    application: RestaurantApplication
    onRestaurantApplicationUpdated: (application: RestaurantApplicationUpdate) => Promise<void>
    onRestaurantApplicationApproved: (id: string) => Promise<void>
    onRestaurantApplicationRejected: (id: string) => Promise<void>
}


export type RestaurantApplicationsProps = {
    applications: RestaurantApplication[]

    onRestaurantApplicationUpdated: (application: RestaurantApplicationUpdate) => Promise<void>
    onRestaurantApplicationApproved: (id: string) => Promise<void>
    onRestaurantApplicationRejected: (id: string) => Promise<void>
}

export type RestaurantApplicationModalProps = {
    application: RestaurantApplication
    onRestaurantApplicationUpdated: (application: RestaurantApplicationUpdate) => Promise<void>
    onRestaurantApplicationApproved: (id: string) => Promise<void>
    onRestaurantApplicationRejected: (id: string) => Promise<void>
}

// CUSTOMER ADDRESSES


export type CustomerAddressProps = {
    address: CustomerAddress
    onAddressUpdated: (address: CustomerAddressUpdate) => Promise<void>
    onAddressApproved: (id: string) => Promise<void>
    onAddressRejected: (id: string) => Promise<void>
}

export type CustomerAddressesProps = {
    addresses: CustomerAddress[]

    onSearchAddressesByCustomer: (query: string) => Promise<void>
    onSearchAddressesByCountry: (query: string) => Promise<void>
    onSearchAddressesByRegion: (query: string) => Promise<void>
    onSearchAddressesByDetails: (query: string) => Promise<void>

    onCustomerAddressUpdated: (address: CustomerAddressUpdate) => Promise<void>
    onCustomerAddressApproved: (id: string) => Promise<void>
    onCustomerAddressRejected: (id: string) => Promise<void>
}

export type CustomerAddressModalProps = {
    address: CustomerAddress
    onCustomerAddressUpdated: (address: CustomerAddressUpdate) => Promise<void>
    onCustomerAddressApproved: (id: string) => Promise<void>
    onCustomerAddressRejected: (id: string) => Promise<void>
}


// UI

export type OpenAddingModeratorButtonProps = {
    onOpen?: () => Promise<void>
}


export type OpenShowApplicationDetailsButtonProps = {
    onOpen?: () => Promise<void>
}

export type OpenShowAddressDetailsButtonProps = {
    onOpen?: () => Promise<void>
}

