import { OrderCartItemProps } from "../order_cart.types"

const calculateOrderCartItemPrice = (item: OrderCartItemProps) => {
    return item.price * item.quantity
}

const calculateOrderCartTotalPrice = (items: OrderCartItemProps[]) => {
    return items.reduce((total, item) => total + calculateOrderCartItemPrice(item), 0)
}

export { calculateOrderCartItemPrice, calculateOrderCartTotalPrice }