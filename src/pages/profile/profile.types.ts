import { ReactElement, ReactNode } from "react"
import UploadIcon from '@mui/icons-material/Upload';
import { CustomerAddress, CustomerAddressCreate } from "src/models/customerAddress.interfaces";
import { ReviewCreate } from "src/models/review.interfaces";
import { User, UserUpdate, UserUploadImage } from "src/models/user.interfaces";
import { Order } from "src/models/order.interfaces";

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

export type PersonalInformationProps = {
    user: User
    onPersonalInformationUpdated: (user: UserUpdate) => Promise<void>
    onVerificationEmailSent: () => Promise<void>
    onUserImageUploaded: (user: UserUploadImage) => Promise<void>
}

export type OrderDetailsProps = {
    currentUser: User
    order: Order
    onOrderPlaced?: (orderId: string) => Promise<void>
    onOrderDeliveryFinished?: (orderId: string) => Promise<void>
    onOrderReviewCreated?: (review: ReviewCreate) => Promise<void>
}

export type DeliveryAddressesTableProps = {
    addresses: CustomerAddress[]
}

// CUSTOMER

export type CustomerProfileProps = {
    currentUser: User
    onUserImageUploaded: (user: UserUploadImage) => Promise<void>
    onVerificationEmailSent: () => Promise<void>
    onPersonalInformationUpdated: (user: UserUpdate) => Promise<void>
}

export type DeliveryAddressesCategoryProps = {
    approvedAddresses: CustomerAddress[]
    pendingAddresses: CustomerAddress[]
    rejectedAddresses: CustomerAddress[]
    onCustomerAddressCreated: (address: CustomerAddressCreate) => Promise<void>
}

export type CustomerPlacingOrdersCategoryProps = {
    currentUser: User
    orders: Order[]
    onOrderPlaced: (orderId: string) => Promise<void>
}

export type CustomerPendingOrdersCategoryProps = {
    currentUser: User
    orders: Order[]
}

export type CustomerPreparingOrdersCategoryProps = {
    currentUser: User
    orders: Order[]
}

export type CustomerReadyOrdersCategoryProps = {
    currentUser: User
    orders: Order[]
}


export type CustomerDeliveringOrdersCategoryProps = {
    currentUser: User
    orders: Order[]
}

export type CustomerDeliveredOrdersCategoryProps = {
    currentUser: User
    orders: Order[]
    onCourierReviewCreated: (review: ReviewCreate) => Promise<void>
}

export type AddCustomerAddressModalProps = {
    onCustomerAddressCreated: (address: CustomerAddressCreate) => Promise<void>
}

export type AddCourierReviewModalProps = {
    courier: User
    orderId: string
    onCourierReviewCreated: (review: ReviewCreate) => Promise<void>
}

// Courier

export type CourierProfileProps = {
    currentUser: User
    onUserImageUploaded: (user: UserUploadImage) => Promise<void>
    onVerificationEmailSent: () => Promise<void>
    onPersonalInformationUpdated: (user: UserUpdate) => Promise<void>
}

export type CourierDeliveringOrdersCategoryProps = {
    currentUser: User
    orders: Order[]
    onOrderDeliveryFinished: (orderId: string) => Promise<void>
}

export type CourierDeliveredOrdersCategoryProps = {
    currentUser: User
    orders: Order[]
}

// Restaurant Manager

export type RestaurantManagerProfileProps = {
    currentUser: User
    onUserImageUploaded: (user: UserUploadImage) => Promise<void>
    onVerificationEmailSent: () => Promise<void>
    onPersonalInformationUpdated: (user: UserUpdate) => Promise<void>
}


// Moderator

export type ModeratorProfileProps = {
    currentUser: User
    onUserImageUploaded: (user: UserUploadImage) => Promise<void>
    onVerificationEmailSent: () => Promise<void>
    onPersonalInformationUpdated: (user: UserUpdate) => Promise<void>
}

// UI

export type OpenAddingAddressButtonProps = {
    onOpen?: () => void
}

export type OpenAddingReviewButtonProps = {
    isReviewAdded: boolean
    onOpen?: () => void
}

export type FinishOrderDeliveryButtonProps = {
    onClick: () => Promise<void>
}

export type PlaceOrderButtonProps = {
    onClick: () => Promise<void>
}