export default interface IPriceInformation {
    id: string
    orderItemsPrice: number;
    promocodeName?: string;
    promocodeDiscount?: number;
    decountedItemsPrice: number;
    deliveryPrice?: number;
    totalPrice: number;
}