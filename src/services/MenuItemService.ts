import { MenuItem, MenuItemCreate, MenuItemUpdate, MenuItemUploadImage } from "src/models/menuItem.interfaces"
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest"
import { menuMicroservice } from "./axios"
import { MenuItemCategory } from "../models/menuItem.interfaces"

export class MenuItemService {
    
    public static parseMenuItemCreateDataToRequestData(data: MenuItemCreate): any {
        return {
            name: data.name,
            description: data.description,
            price: data.price,
            restaurant_id: data.restaurantId
        }
    }

    public static parseMenuItemUpdateDataToRequestData(data: MenuItemUpdate): any {
        return {
            name: data.name,
            description: data.description,
            price: data.price
        }
    }
    
    public static parseMenuItemFromResponseData(data: any): MenuItem {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            price: data.price,
            imageUrl: data.image_url,
            ratingValue: data.rating,
            reviewsCount: data.reviews_count,
            restaurantId: data.restaurant_id
        }
    }

    public static parseMenuItemsListFromResponseData(data: any): MenuItem[] {
        return data.map((menuItem: any) => this.parseMenuItemFromResponseData(menuItem))
    }

    public static async getRestaurantMenuItems(restaurantId: string): Promise<MenuItem[]> {
        return await sendPrivateRequest<MenuItem[]>(async () => {
            const response = await menuMicroservice.get(`/restaurants/${restaurantId}/items/`)
            return this.parseMenuItemsListFromResponseData(response.data)
        })
    }

    public static async getMenuItem(id: string): Promise<MenuItem> {
        const response = await menuMicroservice.get(`/items/${id}/`)
        return this.parseMenuItemFromResponseData(response.data)
    }

    public static async createMenuItem(data: MenuItemCreate): Promise<MenuItem> {
        const menuItemCreateData = this.parseMenuItemCreateDataToRequestData(data)

        return await sendPrivateRequest<MenuItem>(async () => {
            const response = await menuMicroservice.post('/items/', menuItemCreateData)
            return this.parseMenuItemFromResponseData(response.data)
        })
    }

    public static async updateMenuItem(data: MenuItemUpdate): Promise<MenuItem> {
        const menuItemUpdateData = this.parseMenuItemUpdateDataToRequestData(data)

        return await sendPrivateRequest<MenuItem>(async () => {
            const response = await menuMicroservice.put(`/items/${data.id}/`, menuItemUpdateData)
            return this.parseMenuItemFromResponseData(response.data)
        })
    }

    public static async uploadMenuItemImage(data: MenuItemUploadImage): Promise<MenuItem> {
        const formData = new FormData()
        formData.append('image', data.image)

        return await sendPrivateRequest<MenuItem>(async () => {
            const response = await menuMicroservice.put(`/items/${data.id}/image/`, formData)
            return this.parseMenuItemFromResponseData(response.data)
        })
    }

    public static async deleteMenuItem(id: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await menuMicroservice.delete(`/items/${id}/`)
        })
    }

    public static async addMenuItemToCategory(data: MenuItemCategory): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await menuMicroservice.post(`/categories/${data.categoryId}/items/${data.itemId}/`)
        })
    }

    public static async removeMenuItemFromCategory(data: MenuItemCategory): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await menuMicroservice.delete(`/categories/${data.categoryId}/items/${data.itemId}/`)
        })
    }

}