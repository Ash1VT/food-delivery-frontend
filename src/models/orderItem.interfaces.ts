export interface OrderItem {
    id: string;
    menuItemImageUrl: string
    menuItemName: string
    menuItemPrice: number
    quantity: number;
    orderId: string
}

export interface OrderItemCreate {
    menuItemId: string
    quantity: number
}

export interface OrderItemUpdate {
    itemId: string
    orderId: string
    quantity: number
}