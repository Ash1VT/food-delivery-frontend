import ICustomerAddress from "src/redux/models/ICustomerAddress";
import IOrder from "src/redux/models/IOrder";
import IPriceInformation from "src/redux/models/IPriceInformation";

export type OrderItemProps = {
    id: string
    name: string;
    imageUrl: string
    quantity: number
    price: number
}

export type OrderItemsListProps = {
    items: OrderItemProps[]
}

export type SelectAddressProps = {
    order: IOrder
    addresses: ICustomerAddress[]
    onAddressSelected: (addressId: string) => Promise<void>
}

export type PromocodeInputProps = {
    order: IOrder
    onPromocodeApplied: (promocodeName: string) => Promise<boolean>
}

export type OrderPriceProps = {
    order: IOrder
    onOrderPlaced: (orderId: string) => Promise<void>
}

export type ApplyPromocodeButtonProps = {
    isApplied: boolean
    onPromocodeApplied: () => Promise<void>
}

export type PlaceOrderButtonProps = {
    order: IOrder
    onOrderPlaced: (orderId: string) => Promise<void>
}