import { Promocode, PromocodeCreate, PromocodeUpdate } from "src/models/promocode.interfaces";
import { orderMicroservice } from "./axios";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";

export class PromocodeService {

    public static parsePromocodeCreateToRequestData(data: PromocodeCreate): any {
        return {
            restaurantId: data.restaurantId,
            nameIdentifier: data.nameIdentifier,
            validFrom: data.validFrom.toISOString(),
            validUntil: data.validUntil.toISOString(),
            maxUsageCount: data.maxUsageCount,
            discountPercentage: data.discountPercentage
        }
    }

    public static parsePromocodeUpdateToRequestData(data: PromocodeUpdate): any {
        return {
            discountPercentage: data.discountPercentage,
            validFrom: data.validFrom.toISOString(),
            validUntil: data.validUntil.toISOString(),
            maxUsageCount: data.maxUsageCount
        }
    }

    public static parsePromocodeFromResponseData(data: any): Promocode {
        return {
            id: data.id,
            nameIdentifier: data.nameIdentifier,
            currentUsageCount: data.currentUsageCount,
            restaurantId: data.restaurantId,
            validFrom: new Date(data.validFrom),
            validUntil: new Date(data.validUntil),
            isActive: data.isActive,
            maxUsageCount: data.maxUsageCount,
            discountPercentage: data.discountPercentage
        }
    }

    public static parsePromocodesListFromResponseData(data: any): Promocode[] {
        return data.map((item: any) => this.parsePromocodeFromResponseData(item))
    }

    public static async getRestaurantPromocodes(restaurantId: string): Promise<Promocode[]> {
        return await sendPrivateRequest<Promocode[]>(async () => {
            const response = await orderMicroservice.get(`/restaurants/${restaurantId}/promocodes/`)
            return this.parsePromocodesListFromResponseData(response.data)
        })
    }

    public static async createPromocode(data: PromocodeCreate): Promise<Promocode> {
        const promocodeCreateData = this.parsePromocodeCreateToRequestData(data)

        return await sendPrivateRequest<Promocode>(async () => {
            const response = await orderMicroservice.post(`/promocodes/`, promocodeCreateData)
            return this.parsePromocodeFromResponseData(response.data)
        })
    }

    public static async updatePromocode(data: PromocodeUpdate): Promise<Promocode> {
        const promocodeUpdateData = this.parsePromocodeUpdateToRequestData(data)

        return await sendPrivateRequest<Promocode>(async () => {
            const response = await orderMicroservice.patch(`/promocodes/${data.id}/`, promocodeUpdateData)
            return this.parsePromocodeFromResponseData(response.data)
        })
    }

    public static async activatePromocode(id: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.patch(`/promocodes/${id}/activate/`)
        })
    }

    public static async deactivatePromocode(id: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await orderMicroservice.patch(`/promocodes/${id}/deactivate/`)
        })
    }
}