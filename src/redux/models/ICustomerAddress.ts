import IUser from "./IUser"

export default interface ICustomerAddress {
    id: string
    country: string
    region: string
    details: string
    approvalStatus: string
    customerId: string
    customer?: IUser
}