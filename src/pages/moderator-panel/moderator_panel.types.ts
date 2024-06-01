import { SelectOption } from "src/components/ui/select-component/select_component.types"
import ICustomerAddress from "src/redux/models/ICustomerAddress"
import IRestaurantApplication from "src/redux/models/IRestaurantApplication"
import IUser from "src/redux/models/IUser"

// USERS

export type UserProps = {
    user: IUser
    onEmailVerifiedChanged: (id: string, isEmailVerified: boolean) => Promise<void>
    onActivityChanged: (id: string, isActive: boolean) => Promise<void>
    onOpenEditingUser: (user: IUser) => Promise<void>
}

export type UsersProps = {
    users: IUser[]
    filterRoles: SelectOption[]
    filterIsEmailVerified: SelectOption[]
    filterIsActive: SelectOption[]

    onSearchUsers: (query: string) => Promise<void>
    onFilteredRoles: (value: string) => Promise<void>
    onFilteredEmailVerified: (value: string) => Promise<void>
    onFilteredIsActive: (value: string) => Promise<void>

    onEmailVerifiedChanged: (id: string, isEmailVerified: boolean) => Promise<void>
    onActivityChanged: (id: string, isActive: boolean) => Promise<void>
    onOpenEditingUser: (user: IUser) => Promise<void>
    onOpenAddingModerator: () => Promise<void>
}


// RESTAURANT APPLICATIONS

export type RestaurantApplicationProps = {
    application: IRestaurantApplication
    onOpenShowDetailsApplication: (application: IRestaurantApplication) => Promise<void>
}


export type RestaurantApplicationsProps = {
    applications: IRestaurantApplication[]
    onOpenShowDetailsApplication: (application: IRestaurantApplication) => Promise<void>
}

// CUSTOMER ADDRESSES


export type CustomerAddressProps = {
    address: ICustomerAddress
    onOpenShowDetailsAddress: (address: ICustomerAddress) => Promise<void>
}

export type CustomerAddressesProps = {
    addresses: ICustomerAddress[]

    onSearchAddressesByCustomer: (query: string) => Promise<void>
    onSearchAddressesByCountry: (query: string) => Promise<void>
    onSearchAddressesByRegion: (query: string) => Promise<void>
    onSearchAddressesByDetails: (query: string) => Promise<void>

    onOpenShowDetailsAddress: (address: ICustomerAddress) => Promise<void>
}


// UI

export type OpenAddingModeratorButtonProps = {
    onOpen: () => Promise<void>
}


export type OpenShowApplicationDetailsButtonProps = {
    onOpen: () => Promise<void>
}

export type OpenShowAddressDetailsButtonProps = {
    onOpen: () => Promise<void>
}

