import { OrderCartItem } from "src/models/orderCartItem.interfaces"
import { User } from "src/models/user.interfaces"


export type OrderCartProps = {
    currentUser?: User | undefined | null
}
export type OrderCartItemProps = {
    item: OrderCartItem
}

export type OrderCartItemsListProps = {
    items: OrderCartItem[]
}

export type OrderCartWithItemsProps = {
    items: OrderCartItem[]
    onOrderCreated: () => Promise<void>
}

export type OrderItemCounterProps = {
    quantity: number
    onQuantityChanged: (newQuantity: number) => void
}

export type OrderCartRemoveItemButtonProps = {
    onItemRemoved: () => void
}

export type OrderCartButtonProps = {
    totalPrice: number
    onOrdered: () => void
}