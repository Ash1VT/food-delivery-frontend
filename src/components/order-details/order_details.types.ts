import { Order } from "src/models/order.interfaces"
import { ReviewCreate } from "src/models/reviews.interfaces"
import { User } from "src/models/user.interfaces"

export type OrderDetailsProps = {
    currentUser: User
    order: Order
    onOrderPlaced?: (orderId: string) => Promise<void>
    onOrderDeliveryFinished?: (orderId: string) => Promise<void>
    onOrderReviewCreated?: (review: ReviewCreate) => Promise<void>
}