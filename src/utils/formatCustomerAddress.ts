import { CustomerAddress } from "src/models/customerAddress.interfaces"

export const formatCustomerAddress = (customerAddress: CustomerAddress) => {
    return `${customerAddress.details}, ${customerAddress.region}, ${customerAddress.country}`
}