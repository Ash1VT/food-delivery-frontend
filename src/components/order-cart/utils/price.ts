import { OrderCartItem, OrderCartItemProps } from "../order_cart.types"

const calculateOrderCartItemPrice = (item: OrderCartItem) => {
    return 1
    // return item.price * item.quantity
}

const calculateOrderCartTotalPrice = (items: OrderCartItem[]) => {
    return items.reduce((total, item) => total + calculateOrderCartItemPrice(item), 0)
}

export { calculateOrderCartItemPrice, calculateOrderCartTotalPrice }