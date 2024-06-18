import { OrderCartItem } from "src/models/orderCartItem.interfaces"

const calculateOrderCartItemPrice = (item: OrderCartItem) => {
    return item.menuItemPrice * item.quantity
}

const calculateOrderCartTotalPrice = (items: OrderCartItem[]) => {
    return items.reduce((total, item) => total + calculateOrderCartItemPrice(item), 0)
}

export { calculateOrderCartItemPrice, calculateOrderCartTotalPrice }