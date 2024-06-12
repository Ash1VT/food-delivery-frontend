import { CustomerAddress } from "src/models/customerAddress.interfaces"

export const formatAddress = (customerAddress: CustomerAddress) => {
    return `${customerAddress.country}, ${customerAddress.region}, ${customerAddress.details}`
}