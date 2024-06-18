export type TakeOrderModalProps = {
    onOrderTaken: (deliveryType: string) => Promise<void>
}