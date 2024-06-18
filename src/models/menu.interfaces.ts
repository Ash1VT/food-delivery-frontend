import { MenuCategory } from "./menuCategory.interfaces"

export interface Menu {
    id: string
    name: string
    description: string
    restaurantId: string
    menuCategories: MenuCategory[]
}

export interface MenuCreate {
    name: string
    description?: string
    restaurantId: string
}

export interface MenuUpdate {
    id: string
    name: string
    description?: string
}


export interface MenuRestaurant {
    menuId: string
    restaurantId: string
}