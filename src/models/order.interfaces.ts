import { DeliveryInformation } from "./deliveryInformation.interfaces";
import { OrderItem, OrderItemCreate } from "./orderItem.interfaces";
import { PriceInformation } from "./priceInformation.interfaces";
import { Restaurant } from "./restaurant.interfaces";
import { Review } from "./reviews.interfaces";
import { User } from "./user.interfaces";

export interface Order {
    id: string
    customerId: string;
    courierId?: string | undefined | null
    restaurantId: string;
    status: string
    createdAt: Date;
    items: OrderItem[]
    deliveryInformation: DeliveryInformation;
    priceInformation: PriceInformation;
    customer?: User | undefined | null
    courier?: User | undefined | null
    restaurant?: Restaurant
    review?: Review | undefined | null
    courierRating?: number | undefined | null
}

export interface OrderCreate {
    restaurantId: string
    items: OrderItemCreate[]
}

export interface OrderUpdate {
    id: string
    promocodeName?: string
    customerAddressId?: string
}

export interface OrderTake {
    id: string
    deliveryType: string
}