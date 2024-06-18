import { Restaurant, RestaurantCreate, RestaurantUpdate, RestaurantUpdateResponse, RestaurantUploadImage, RestaurantsList, RestaurantsListRequestData } from "src/models/restaurant.interfaces";
import { WorkingHoursService } from "./WorkingHoursService";
import { restaurantMicroservice } from "./axios";
import { RestaurantApplication } from "src/models/restaurantApplication.interfaces";
import { RestaurantApplicationService } from "./RestaurantApplicationService";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";

export class RestaurantService {

    public static parseRestaurantFromResponseData(data: any): Restaurant {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            imageUrl: data.image_url,
            email: data.email,
            address: data.address,
            ratingValue: data.rating,
            reviewsCount: data.reviews_count,
            phone: data.phone,
            isActive: data.is_active,
            workingHours: WorkingHoursService.parseWorkingHoursListFromResponseData(data.working_hours)
        }
    }

    public static parseRestaurantUpdateFromResponseData(data: any): RestaurantUpdateResponse {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            imageUrl: data.image_url,
            email: data.email,
            ratingValue: data.rating_value,
            reviewsCount: data.reviews_count,
            address: data.address,
            phone: data.phone,
            isActive: data.is_active
        }
    }

    private static parseRestaurantCreateDataToRequestData(restaurant: RestaurantCreate): any {
        return {
            name: restaurant.name,
            description: restaurant.description,
            address: restaurant.address,
            email: restaurant.email,
            phone: restaurant.phone
        }
    }

    private static parseRestaurantUpdateDataToRequestData(restaurant: RestaurantUpdate): any {
        return {
            name: restaurant.name,
            description: restaurant.description,
            address: restaurant.address,
            email: restaurant.email,
            phone: restaurant.phone
        }
    }

    public static parseRestaurantsListFromResponseData(data: any): RestaurantsList {
        return {
            count: data.count,
            limit: data.limit,
            offset: data.offset,
            items: data.items.map((restaurant: any) => this.parseRestaurantFromResponseData(restaurant))
        }
    }

    public static async getRestaurantsPage(data: RestaurantsListRequestData): Promise<RestaurantsList> {
        const response = await restaurantMicroservice.get(`/restaurants/?limit=${data.limit}&offset=${data.offset}${data.address ? `&address=${data.address}` : ''}${data.orderByRating ? '&order_by_rating=true' : ''}${data.name ? `&name=${data.name}` : ''}`)
        return this.parseRestaurantsListFromResponseData(response.data)
    }

    public static async getRestaurant(id: string): Promise<Restaurant> {
        const response = await restaurantMicroservice.get(`/restaurants/${id}/`)
        return this.parseRestaurantFromResponseData(response.data)
    }

    public static async getCurrentManagerRestaurant(): Promise<Restaurant | null> {
        return await sendPrivateRequest<Restaurant | null>(async () => {
            const response = await restaurantMicroservice.get(`/restaurants/current/`)
            if (!response.data) return null
            return this.parseRestaurantFromResponseData(response.data)
        })
    }

    public static async createRestaurant(data: RestaurantCreate): Promise<RestaurantApplication> {
        const restaurantCreateData = this.parseRestaurantCreateDataToRequestData(data)

        return await sendPrivateRequest<RestaurantApplication>(async () => {
            const response = await restaurantMicroservice.post('/restaurants/', restaurantCreateData)
            return RestaurantApplicationService.parseRestaurantApplicationFromResponseData(response.data)
        })
    }

    public static async updateRestaurant(data: RestaurantUpdate): Promise<RestaurantApplication> {
        const restaurantUpdateData = this.parseRestaurantUpdateDataToRequestData(data)

        return await sendPrivateRequest<RestaurantApplication>(async () => {
            const response = await restaurantMicroservice.put(`/restaurants/${data.id}/`, restaurantUpdateData)
            return RestaurantApplicationService.parseRestaurantApplicationFromResponseData(response.data)
        })
    }

    public static async uploadRestaurantImage(data: RestaurantUploadImage): Promise<RestaurantUpdateResponse> {
        const formData = new FormData()
        formData.append('image', data.image)

        return await sendPrivateRequest<RestaurantUpdateResponse>(async () => {
            const response = await restaurantMicroservice.put(`/restaurants/${data.id}/image/`, formData)
            return this.parseRestaurantUpdateFromResponseData(response.data)
        })
    }

    public static async activateRestaurant(id: string): Promise<RestaurantUpdateResponse> {
        return await sendPrivateRequest<RestaurantUpdateResponse>(async () => {
            const response = await restaurantMicroservice.patch(`/restaurants/${id}/activate/`)
            return this.parseRestaurantUpdateFromResponseData(response.data)
        })
    }

    public static async deactivateRestaurant(id: string): Promise<RestaurantUpdateResponse> {
        return await sendPrivateRequest<RestaurantUpdateResponse>(async () => {
            const response = await restaurantMicroservice.patch(`/restaurants/${id}/deactivate/`)
            return this.parseRestaurantUpdateFromResponseData(response.data)
        })
    }
}
