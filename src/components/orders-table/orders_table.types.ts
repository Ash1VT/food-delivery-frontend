import IOrder from "src/redux/models/IOrder"



export type OrderRowProps = {
    order: IOrder
    buttonLabel?: string
    onOpenDetailedInformation: (order: IOrder) => Promise<void>
    onOrderButtonClick?: (order: IOrder) => Promise<void>
}

export type OrdersTableProps = {
    orders: IOrder[]
    buttonLabel?: string
    onOpenDetailedInformation: (order: IOrder) => Promise<void>
    onOrderButtonClick?: (order: IOrder) => Promise<void>
}


export type OrderActionButtonProps = {
    buttonLabel: string
    onClick: () => Promise<void>
}

export type OpenDetailedInformationProps = {
    onClick: () => Promise<void>
}