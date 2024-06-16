import { DeliveryInformation } from "src/models/deliveryInformation.interfaces";
import { Order, OrderCreate, OrderTake, OrderUpdate } from "src/models/order.interfaces";
import { PriceInformation } from "src/models/priceInformation.interfaces";
import { OrderItemService } from "./OrderItemService";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";
import { orderMicroservice } from "./axios";
import { ReviewService } from "./ReviewService";
import { UserService } from "./UserService";
import { RestaurantService } from "./RestaurantService";

export class OrderService {

    public static parseOrderCreateToRequestData(data: OrderCreate): any {
        return {
            restaurantId: data.restaurantId,
            items: data.items.map((item) => {
                return {
                    menuItemId: item.menuItemId, 
                    quantity: item.quantity
                }
            })
        }
    }

    public static parseOrderUpdateToRequestData(data: OrderUpdate): any {
        return {
            promocodeName: data.promocodeName,
            customerAddressId: data.customerAddressId
        }
    }

    public static parseDeliveryInformationFromResponseData(data: any): DeliveryInformation {
        return {
            id: data.id,
            deliveryType: data.deliveryType,
            deliveryDistance: data.deliveryDistance,
            supposedDeliveryTime: data.supposedDeliveryTime,
            originAddress: data.originAddress,
            destinationAddress: data.destinationAddress,
            deliveryAcceptedAt: data.deliveryAcceptedAt,
            actualDeliveryTime: data.actualDeliveryTime,
            deliveryFinishedAt: data.deliveryFinishedAt
        }
    }

    public static parsePriceInformationFromResponseData(data: any): PriceInformation {
        return {
            id: data.id,
            orderItemsPrice: data.orderItemsPrice,
            promocodeName: data.promocodeName,
            promocodeDiscount: data.promocodeDiscount,
            decountedItemsPrice: data.decountedPrice,
            deliveryPrice: data.deliveryPrice,
            totalPrice: data.totalPrice
        }
    }

    public static parseOrderFromResponseData(data: any): Order {
        return {
            id: data.id,
            status: data.status,
            customerId: data.customerId,
            courierId: data.courierId,
            restaurantId: data.restaurantId,
            createdAt: new Date(data.createdAt),
            items: OrderItemService.parseOrderItemsListFromResponseData(data.items),
            deliveryInformation: this.parseDeliveryInformationFromResponseData(data.deliveryInformation),
            priceInformation: this.parsePriceInformationFromResponseData(data.priceInformation)
        }
    }

    public static parseOrderListFromResponseData(data: any): Order[] {
        return data.map(this.parseOrderFromResponseData)
    }

    public static async getOrderFullData(order: Order): Promise<Order> {
        const review = await ReviewService.getOrderReview(order.id)
        const courier = order.courierId ? await UserService.getUser(order.courierId) : undefined
        const customer = await UserService.getUser(order.customerId)
        const restaurant = await RestaurantService.getRestaurant(order.restaurantId)
        const courierRating = order.courierId ? await ReviewService.getCourierRating(order.courierId) : undefined

        return {
            ...order,
            review: review,
            courier: courier,
            customer: customer,
            restaurant: restaurant,
            courierRating: courierRating ? courierRating.ratingValue : undefined
        }
    }

    public static async getOrder(orderId: string): Promise<Order> {
        return await sendPrivateRequest<Order>(async () => {
            const response = await orderMicroservice.get(`/orders/${orderId}/`)
            const order = this.parseOrderFromResponseData(response.data)

            return await this.getOrderFullData(order)
        })
    }

    public static async getOrders(status?: string): Promise<Order[]> {
        return await sendPrivateRequest<Order[]>(async () => {
            const response = await orderMicroservice.get(`/orders/${status ? `?status=${status}/` : ''}`)
            const orders = this.parseOrderListFromResponseData(response.data)

            const ordersWithFullData = await Promise.all(orders.map(async (order) => {
                return await this.getOrderFullData(order)
            }))

            return ordersWithFullData
        })
    }

    public static async getCurrentCustomerOrders(): Promise<Order[]> {
        return await sendPrivateRequest<Order[]>(async () => {
            const response = await orderMicroservice.get('/orders/customer/')
            const orders = this.parseOrderListFromResponseData(response.data)

            const ordersWithFullData = await Promise.all(orders.map(async (order) => {
                return await this.getOrderFullData(order)
            }))

            return ordersWithFullData
        })
    }

    public static async getCurrentCourierOrders(): Promise<Order[]> {
        return await sendPrivateRequest<Order[]>(async () => {
            const response = await orderMicroservice.get('/orders/courier/')
            const orders = this.parseOrderListFromResponseData(response.data)

            const ordersWithFullData = await Promise.all(orders.map(async (order) => {
                return await this.getOrderFullData(order)
            }))

            return ordersWithFullData
        })
    }

    public static async getRestaurantOrders(restaurantId: string): Promise<Order[]> {
        return await sendPrivateRequest<Order[]>(async () => {
            const response = await orderMicroservice.get(`restaurants/${restaurantId}/orders/`)
            const orders = this.parseOrderListFromResponseData(response.data)

            const ordersWithFullData = await Promise.all(orders.map(async (order) => {
                return await this.getOrderFullData(order)
            }))

            return ordersWithFullData
        })
    }

    public static async getAvailableOrders(): Promise<Order[]> {
        return await sendPrivateRequest<Order[]>(async () => {
            const response = await orderMicroservice.get('/orders/available/')
            const orders = this.parseOrderListFromResponseData(response.data)

            const ordersWithFullData = await Promise.all(orders.map(async (order) => {
                return await this.getOrderFullData(order)
            }))

            return ordersWithFullData
        })
    }

    public static async createOrder(data: OrderCreate): Promise<Order> {
        const orderCreateData = this.parseOrderCreateToRequestData(data)

        return await sendPrivateRequest<Order>(async () => {
            const response = await orderMicroservice.post('/orders/', orderCreateData)
            const order = this.parseOrderFromResponseData(response.data)

            return await this.getOrderFullData(order)
        })
    }

    public static async updateOrder(data: OrderUpdate): Promise<Order> {
        const orderUpdateData = this.parseOrderUpdateToRequestData(data)

        return await sendPrivateRequest<Order>(async () => {
            const response = await orderMicroservice.put(`/orders/${data.id}/`, orderUpdateData)
            return this.parseOrderFromResponseData(response.data)
        })
    }

    public static async placeOrder(orderId: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.post(`/orders/${orderId}/place/`)
        })
    }

    public static async confirmOrder(orderId: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.post(`/orders/${orderId}/confirm/`)
        })
    }

    public static async prepareOrder(orderId: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.post(`/orders/${orderId}/prepare/`)
        })
    }

    public static async takeOrder(data: OrderTake): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.post(`/orders/${data.id}/take/?deliveryType=${data.deliveryType}`)
        })
    }

    public static async finishOrderDelivery(orderId: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.post(`/orders/${orderId}/finish/`)
        })
    }
}