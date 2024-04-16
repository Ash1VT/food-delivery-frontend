export type OrderCartItem = {
    id: string
    // imageUrl: string
    // categoryName: string
    // name: string
    // price: number
    quantity: number
}

export type OrderCartItemProps = OrderCartItem

export type OrderCartItemsListProps = {
    items: OrderCartItem[]
}

export type OrderCartProps = {
    items: OrderCartItemProps[]
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