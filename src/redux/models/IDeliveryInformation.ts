export default interface IDeliveryInformation {
    id: string
    deliveryType?: string;
    deliveryDistance?: number;
    supposedDeliveryTime?: number;

    originAddress: string;
    destinationAddress?: string;
    destiantionAddressId?: string;

    deliveryAcceptedAt?: Date;
    actualDeliveryTime?: number;
    deliveryFinishedAt?: Date;
}