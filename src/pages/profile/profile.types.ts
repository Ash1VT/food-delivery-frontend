import { ReactElement, ReactNode } from "react"
import UploadIcon from '@mui/icons-material/Upload';
import IUser from "src/redux/models/IUser"
import ICustomerAddress from "src/redux/models/ICustomerAddress";
import IOrder from "src/redux/models/IOrder";

export type ProfileCategoryProps = {
    id: number
    name: string
}

export type ProfileCategoryClick = {
    id: number
    setIsClicked: (isClicked: boolean) => void
}

export type ProfileCategoryClicksContextProps = {
    profileCategoryClicks: ProfileCategoryClick[]
    activeCategoryId: number
    setActiveCategoryId: (id: number) => void
}

export type UploadUserImageFormProps = {
    onUserImageUpload: (image: File) => Promise<void>
}

export type UserUpdateProps = {
    id: string
    firstName: string
    lastName: string
    birthDate: Date
    phone: string
}

export type PersonalInformationProps = {
    user: IUser
    onPersonalInformationUpdated: (user: UserUpdateProps) => Promise<void>
    onUserImageUploaded: (userId: string, image: File) => Promise<void>
}

export type OrderDetailsProps = {
    currentUser: IUser
    order: IOrder
    onOrderPlaced?: (orderId: string) => Promise<void>
    onOrderDeliveryFinished?: (orderId: string) => Promise<void>
    onOpenAddingOrderReview?: () => void
}

export type DeliveryAddressesTableProps = {
    addresses: ICustomerAddress[]
}

// CUSTOMER

export type CustomerProfileProps = {
    currentUser: IUser
    onPersonalInformationUpdated: (user: UserUpdateProps) => Promise<void>
}

export type DeliveryAddressesCategoryProps = {
    approvedAddresses: ICustomerAddress[]
    pendingAddresses: ICustomerAddress[]
    rejectedAddresses: ICustomerAddress[]
    onOpenAddingAddress: () => void
}

export type CustomerPlacingOrdersCategoryProps = {
    currentUser: IUser
    orders: IOrder[]
    onOrderPlaced: (orderId: string) => Promise<void>
}

export type CustomerPendingOrdersCategoryProps = {
    currentUser: IUser
    orders: IOrder[]
}

export type CustomerPreparingOrdersCategoryProps = {
    currentUser: IUser
    orders: IOrder[]
}

export type CustomerReadyOrdersCategoryProps = {
    currentUser: IUser
    orders: IOrder[]
}


export type CustomerDeliveringOrdersCategoryProps = {
    currentUser: IUser
    orders: IOrder[]
}

export type CustomerDeliveredOrdersCategoryProps = {
    currentUser: IUser
    orders: IOrder[]
    onOpenAddingOrderReview: () => void
}

// Courier

export type CourierProfileProps = {
    currentUser: IUser
    onPersonalInformationUpdated: (user: UserUpdateProps) => Promise<void>
}

export type CourierDeliveringOrdersCategoryProps = {
    currentUser: IUser
    orders: IOrder[]
    onOrderDeliveryFinished: (orderId: string) => Promise<void>
}

export type CourierDeliveredOrdersCategoryProps = {
    currentUser: IUser
    orders: IOrder[]
}


// UI

export type OpenAddingAddressButtonProps = {
    onOpen: () => void
}

export type OpenAddingReviewButtonProps = {
    isReviewAdded: boolean
    onOpen: () => void
}

export type FinishOrderDeliveryButtonProps = {
    onClick: () => Promise<void>
}

export type PlaceOrderButtonProps = {
    onClick: () => Promise<void>
}