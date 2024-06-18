import { MenuItem } from "./menuItem.interfaces"

export interface MenuCategory {
    id: string
    name: string
    imageUrl: string
    menuId: string
    items: MenuItem[]
}

export interface MenuCategoryCreate {
    name: string
    menuId: string
}

export interface MenuCategoryUpdate {
    id: string
    name: string
}

export interface MenuCategoryUploadImage {
    id: string
    image: File
}