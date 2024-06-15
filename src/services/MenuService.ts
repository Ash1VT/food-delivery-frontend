import { Menu, MenuCreate, MenuRestaurant, MenuUpdate } from "src/models/menu.interfaces";
import { MenuCategoryService } from "./MenuCategoryService";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";
import { menuMicroservice } from "./axios";

export class MenuService {
    
    public static parseMenuCreateDataToRequestData(data: MenuCreate): any {
        return {
            name: data.name,
            description: data.description,
            restaurant_id: data.restaurantId
        }
    }

    public static parseMenuUpdateDataToRequestData(data: MenuUpdate): any {
        return {
            name: data.name,
            description: data.description
        }
    }

    public static parseMenuFromResponseData(data: any): Menu {
        return {
            id: data.id,
            description: data.description,
            name: data.name,
            restaurantId: data.restaurant_id,
            menuCategories: MenuCategoryService.parseMenuCategoriesListFromResponseData(data.menu_categories)
        }
    }

    public static parseMenusListFromResponseData(data: any): Menu[] {
        return data.map((menu: any) => this.parseMenuFromResponseData(menu))
    }


    public static async getRestaurantCurrentMenu(restaurantId: string): Promise<Menu> {
        const response = await menuMicroservice.get(`/restaurants/${restaurantId}/menu/`)
        return this.parseMenuFromResponseData(response.data)
    }

    public static async getRestaurantMenus(restaurantId: string): Promise<Menu[]> {
        return await sendPrivateRequest<Menu[]>(async () => {
            const response = await menuMicroservice.get(`/restaurants/${restaurantId}/menus/`)
            return this.parseMenusListFromResponseData(response.data)
        })
    }

    public static async createMenu(data: MenuCreate): Promise<Menu> {
        const menuCreateData = this.parseMenuCreateDataToRequestData(data)

        return await sendPrivateRequest<Menu>(async () => {
            const response = await menuMicroservice.post('/menus/', menuCreateData)
            return this.parseMenuFromResponseData(response.data)
        })
    }

    public static async updateMenu(data: MenuUpdate): Promise<Menu> {
        const menuUpdateData = this.parseMenuUpdateDataToRequestData(data)

        return await sendPrivateRequest<Menu>(async () => {
            const response = await menuMicroservice.put(`/menus/${data.id}/`, menuUpdateData)
            return this.parseMenuFromResponseData(response.data)
        })
    }

    public static async deleteMenu(menuId: string): Promise<void> {
        await sendPrivateRequest<void>(async () => {
            await menuMicroservice.delete(`/menus/${menuId}/`)
        })
    }

    public static async setCurrentRestaurantMenu(data: MenuRestaurant): Promise<void> {
        await sendPrivateRequest<void>(async () => {
            await menuMicroservice.post(`/restaurants/${data.restaurantId}/menus/${data.menuId}/current/`)
        })
    }

    public static async unsetCurrentRestaurantMenu(restaurantId: string): Promise<void> {
        await sendPrivateRequest<void>(async () => {
            await menuMicroservice.delete(`/restaurants/${restaurantId}/menus/current/`)
        })
    }

}