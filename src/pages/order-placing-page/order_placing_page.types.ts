import { CustomerAddress } from "src/models/customerAddress.interfaces"
import { Order } from "src/models/order.interfaces"
import { OrderItem } from "src/models/orderItem.interfaces"

export type OrderItemProps = {
    item: OrderItem
    onQuantityChanged: (id: string, quantity: number) => Promise<void>
}

export type OrderItemsListProps = {
    items: OrderItem[]
    onQuantityChanged: (id: string, quantity: number) => Promise<void>
}

export type SelectAddressProps = {
    order: Order
    addresses: CustomerAddress[]
    onAddressSelected: (addressId: string) => Promise<void>
}

export type PromocodeInputProps = {
    order: Order
    onPromocodeApplied: (promocodeName: string) => Promise<void>
}

export type PaymentCardProps = {
    order: Order
    onOrderPlaced: (orderId: string) => Promise<void>
}

export type OrderPriceProps = {
    order: Order
}

export type ApplyPromocodeButtonProps = {
    isApplied: boolean
    onPromocodeApplied: () => Promise<void>
}

export type PlaceOrderButtonProps = {
    order: Order
    onOrderPlaced: (orderId: string) => Promise<void>
}