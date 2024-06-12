import { OrderItem } from "src/models/orderItem.interfaces"

export const addOrderCartItemToLocalStorage = (orderCartItem: OrderItem) => {
    const orderCartItems = getOrderCartItemsFromLocalStorage()
    console.log(orderCartItems)

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


export const getOrderCartItemsFromLocalStorage = (): OrderItem[] => {
    const orderCartItems = localStorage.getItem('orderCartItems')
    if (orderCartItems) {
        return JSON.parse(orderCartItems)
    } else {
        return []
    }
}