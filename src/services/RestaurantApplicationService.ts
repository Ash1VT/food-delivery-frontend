import { RestaurantApplication, RestaurantApplicationUpdate } from "src/models/restaurantApplication.interfaces";
import { restaurantMicroservice } from "./axios";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";

export class RestaurantApplicationService {
    
    public static parseRestaurantApplicationFromResponseData(data: any): RestaurantApplication {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            address: data.address,
            email: data.email,
            phone: data.phone,
            type: data.type,
            restaurantManagerId: data.restaurant_manager_id
        }
    }

    public static parseRestaurantApplicationListFromResponseData(data: any): RestaurantApplication[] {
        return data.map((item: any) => RestaurantApplicationService.parseRestaurantApplicationFromResponseData(item))
    }

    public static parseRestaurantApplicationUpdateDataToRequestData(data: RestaurantApplicationUpdate): any {
        return {
            name: data.name,
            description: data.description,
            address: data.address,
            email: data.email,
            phone: data.phone,
        }
    }

    public static async getRestaurantsApplications(): Promise<RestaurantApplication[]> {
        return await sendPrivateRequest<RestaurantApplication[]>(async () => {
            const response = await restaurantMicroservice.get('/applications/')
            return this.parseRestaurantApplicationListFromResponseData(response.data)
        })
    }

    public static async getCurrentRestaurantApplications(): Promise<RestaurantApplication[]> {
        return await sendPrivateRequest<RestaurantApplication[]>(async () => {
            const response = await restaurantMicroservice.get('/applications/current/')
            return this.parseRestaurantApplicationListFromResponseData(response.data)
        })
    }

    public static async updateRestaurantApplication(data: RestaurantApplicationUpdate): Promise<RestaurantApplication> {
        const restaurantApplicationUpdateData = this.parseRestaurantApplicationUpdateDataToRequestData(data)

        return await sendPrivateRequest<RestaurantApplication>(async () => {
            const response = await restaurantMicroservice.put(`/applications/${data.id}/`, restaurantApplicationUpdateData)
            return this.parseRestaurantApplicationFromResponseData(response.data)
        })
    }

    public static async confirmRestaurantApplication(id: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await restaurantMicroservice.post(`/applications/${id}/confirm/`)
        })
    }

    public static async declineRestaurantApplication(id: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await restaurantMicroservice.post(`/applications/${id}/decline/`)
        })
    }
}
