import { OrderItem, OrderItemUpdate } from "src/models/orderItem.interfaces";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";
import { orderMicroservice } from "./axios";
import { Order } from "src/models/order.interfaces";
import { OrderService } from "./OrderService";

export class OrderItemService {
    
    public static parseOrderItemUpdateToRequestData(data: OrderItemUpdate): any {
        return {
            quantity: data.quantity
        }
    }

    public static parseOrderItemFromResponseData(data: any): OrderItem {
        return {
            id: data.id,
            quantity: data.quantity,
            menuItemName: data.menuItemName,
            menuItemPrice: data.menuItemPrice,
            menuItemImageUrl: data.menuItemImageUrl,
            orderId: data.orderId
        }
    }

    public static parseOrderItemsListFromResponseData(data: any): OrderItem[] {
        return data.map((item: any) => this.parseOrderItemFromResponseData(item));
    }

    public static async updateOrderItem(data: OrderItemUpdate): Promise<Order> {
        const orderItemUpdateData = this.parseOrderItemUpdateToRequestData(data)

        return await sendPrivateRequest<Order>(async () => {
            const response = await orderMicroservice.patch(`orders/${data.orderId}/items/${data.itemId}/`, orderItemUpdateData)
            return OrderService.parseOrderFromResponseData(response.data)
        })
    }
}