import { DeliveryInformation } from "./deliveryInformation.interfaces";
import { OrderItem } from "./orderItem.interfaces";
import { PriceInformation } from "./priceInformation.interfaces";
import { Restaurant } from "./restaurant.interfaces";
import { Review } from "./reviews.interfaces";
import { User } from "./user.interfaces";

export interface Order {
    id: string
    customerId: string;
    courierId?: string;
    restaurantId: string;
    status: string
    createdAt: Date;
    items: OrderItem[]
    deliveryInformation: DeliveryInformation;
    priceInformation: PriceInformation;
    customer?: User
    courier?: User
    restaurant: Restaurant
    review?: Review
    courierRating?: number
}