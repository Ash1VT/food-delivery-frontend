import ICustomerAddress from "src/redux/models/ICustomerAddress";

export const formatAddress = (customerAddress: ICustomerAddress) => {
    return `${customerAddress.country}, ${customerAddress.region}, ${customerAddress.details}`
}