export interface PriceInformation {
    id: string
    orderItemsPrice: string;
    promocodeName?: string;
    promocodeDiscount?: number;
    decountedItemsPrice: string;
    deliveryPrice?: string;
    totalPrice: string;
}