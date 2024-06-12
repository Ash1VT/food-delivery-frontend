import { User } from "./user.interfaces"

export interface CustomerAddress {
    id: string
    country: string
    region: string
    details: string
    approvalStatus: string
    customerId: string
    customer?: User
}

export interface CustomerAddressCreate {
    country: string
    region: string
    details: string
}

export interface CustomerAddressUpdate {
    id: string
    country: string
    region: string
    details: string
}