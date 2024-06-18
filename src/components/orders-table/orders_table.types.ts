import { Order } from "src/models/order.interfaces"
import { User } from "src/models/user.interfaces"


export type OrderRowProps = {
    order: Order
    currentUser: User
    buttonLabel?: string
    onOrderButtonClick?: (order: Order) => Promise<void>
}

export type OrdersTableProps = {
    orders: Order[]
    currentUser: User
    buttonLabel?: string
    onOrderButtonClick?: (order: Order) => Promise<void>
}


export type OrderActionButtonProps = {
    buttonLabel: string
    onClick?: () => Promise<void>
}

export type OpenDetailedInformationProps = {
    onClick?: () => Promise<void>
}

export type OrderDetailedInformationModalProps = {
    order: Order
    currentUser: User
}