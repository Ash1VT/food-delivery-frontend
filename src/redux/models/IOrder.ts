import IDeliveryInformation from "./IDeliveryInformation";
import IOrderItem from "./IOrderItem";
import IPriceInformation from "./IPriceInformation";

export default interface IOrder {
    id: string
    customerId: string;
    courierId?: string;
    restaurantId: string;
    status: string
    createdAt: Date;
    items: IOrderItem[]
    deliveryInformation: IDeliveryInformation;
    priceInformation: IPriceInformation;
}