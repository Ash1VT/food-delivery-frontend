export type OrderCartItemProps = {
    id: string
    imageUrl: string
    categoryName: string
    name: string
    price: number
    quantity: number
}

export type OrderCartItemsListProps = {
    items: OrderCartItemProps[]
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