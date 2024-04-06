export type OrderCartItemProps = {
    id: bigint
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
    setQuantity: (callback: (prevQuantity: number) => number) => void
    onQuantityChanged: (newQuantity: number) => void
}

export type OrderCartTotalPriceContextProps = {
    totalPrice: number
    setTotalPrice: (callback: (prevTotalPrice: number) => number) => void,
}