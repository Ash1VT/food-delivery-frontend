export interface MenuItem {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    ratingValue: number;
    reviewsCount: number;
    price: number;
    restaurantId: string
}

export interface MenuItemCreate {
    name: string
    description?: string
    price: number
    restaurantId: string
}

export interface MenuItemUploadImage {
    id: string
    image: File
}

export interface MenuItemCategory {
    itemId: string
    categoryId: string
}

export interface MenuItemUpdate {
    id: string
    name: string
    description?: string
    price: number
}