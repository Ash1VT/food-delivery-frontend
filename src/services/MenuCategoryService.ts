import { MenuCategory, MenuCategoryCreate, MenuCategoryUpdate, MenuCategoryUploadImage } from "src/models/menuCategory.interfaces";
import { MenuItemService } from "./MenuItemService";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";
import { menuMicroservice } from "./axios";

export class MenuCategoryService {
    
    public static parseMenuCategoryCreateDataToRequestData(data: MenuCategoryCreate): any {
        return {
            name: data.name,
            menu_id: data.menuId
        }
    }

    public static parseMenuCategoryUpdateDataToRequestData(data: MenuCategoryUpdate): any {
        return {
            name: data.name
        }
    }

    public static parseMenuCategoryFromResponseData(data: any): MenuCategory {
        return {
            id: data.id,
            name: data.name,
            imageUrl: data.image_url,
            menuId: data.menu_id,
            items: MenuItemService.parseMenuItemsListFromResponseData(data.items)
        }
    }

    public static parseMenuCategoriesListFromResponseData(data: any): MenuCategory[] {
        return data.map((menuCategory: any) => this.parseMenuCategoryFromResponseData(menuCategory))
    }

    public static async createMenuCategory(data: MenuCategoryCreate): Promise<MenuCategory> {
        const menuCategoryCreateData = this.parseMenuCategoryCreateDataToRequestData(data)

        return await sendPrivateRequest<MenuCategory>(async () => {
            const response = await menuMicroservice.post('/categories/', menuCategoryCreateData)
            return this.parseMenuCategoryFromResponseData(response.data)
        })
    }

    public static async updateMenuCategory(data: MenuCategoryUpdate): Promise<MenuCategory> {
        const menuCategoryUpdateData = this.parseMenuCategoryUpdateDataToRequestData(data)

        return await sendPrivateRequest<MenuCategory>(async () => {
            const response = await menuMicroservice.put(`/categories/${data.id}/`, menuCategoryUpdateData)
            return this.parseMenuCategoryFromResponseData(response.data)
        })
    }

    public static async uploadMenuCategoryImage(data: MenuCategoryUploadImage): Promise<MenuCategory> {
        const formData = new FormData()
        formData.append('image', data.image)

        return await sendPrivateRequest<MenuCategory>(async () => {
            const response = await menuMicroservice.put(`/categories/${data.id}/image/`, formData)
            return this.parseMenuCategoryFromResponseData(response.data)
        })
    }

    public static async deleteMenuCategory(id: string): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await menuMicroservice.delete(`/categories/${id}/`)
        })
    }
    
}