export interface DeliveryInformation {
    id: string
    deliveryType?: string;
    deliveryDistance?: number;
    supposedDeliveryTime?: number;

    originAddress: string;
    destinationAddress?: string;

    deliveryAcceptedAt?: Date;
    actualDeliveryTime?: number;
    deliveryFinishedAt?: Date;
}