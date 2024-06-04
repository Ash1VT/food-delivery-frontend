import IDeliveryInformation from "./IDeliveryInformation";
import IOrderItem from "./IOrderItem";
import IOrderReview from "./IOrderReview";
import IPriceInformation from "./IPriceInformation";
import IRestaurant from "./IRestaurant";
import IUser from "./IUser";

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
    customer?: IUser
    courier?: IUser
    restaurant: IRestaurant
    review?: IOrderReview
    courierRating?: number
}