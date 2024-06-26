import { OrderCartItem } from "src/models/orderCartItem.interfaces"
import { OrderItem } from "src/models/orderItem.interfaces"

export const addOrderCartItemToLocalStorage = (orderCartItem: OrderCartItem) => {
    console.log(orderCartItem)
    const orderCartItems = getOrderCartItemsFromLocalStorage()

    if (!orderCartItems.find(item => item.id === orderCartItem.id)) {
        const newOrderCartItems = [...orderCartItems, orderCartItem]
        localStorage.setItem('orderCartItems', JSON.stringify(newOrderCartItems))
    }
}


export const removeOrderCartItemFromLocalStorage = (id: string) => {
    const orderCartItems = getOrderCartItemsFromLocalStorage()
    const newOrderCartItems = orderCartItems.filter(orderCartItem => orderCartItem.id !== id)
    localStorage.setItem('orderCartItems', JSON.stringify(newOrderCartItems))
}

export const clearOrderCartFromLocalStorage = () => {
    localStorage.removeItem('orderCartItems')
}

export const setOrderCartItemQuantityInLocalStorage = (id: string, quantity: number) => {
    const orderCartItems = getOrderCartItemsFromLocalStorage()
    const newOrderCartItems = orderCartItems.map(orderCartItem => {
        if (orderCartItem.id === id) {
            return {
                ...orderCartItem,
                quantity
            }
        } else {
            return orderCartItem
        }
    })
    localStorage.setItem('orderCartItems', JSON.stringify(newOrderCartItems))
}


export const getOrderCartItemsFromLocalStorage = (): OrderCartItem[] => {
    const orderCartItems = localStorage.getItem('orderCartItems')
    if (orderCartItems) {
        return JSON.parse(orderCartItems)
    } else {
        return []
    }
}