import { WorkingHours } from "./workingHours.interfaces"

export interface Restaurant {
    id: string
    name: string
    description?: string
    imageUrl: string
    email: string
    address: string
    phone: string
    ratingValue?: number
    reviewsCount: number
    isActive: boolean
    workingHours: WorkingHours[]
}

export interface RestaurantsListRequestData {
    limit: number
    offset: number
}

export interface RestaurantsList {
    count: number
    limit: number
    offset: number
    items: Restaurant[]
}

export interface RestaurantUploadImage {
    id: string
    image: File
}

export interface RestaurantCreate {
    name: string;
    description: string;
    email: string;
    address: string;
    phone: string;
}

export interface RestaurantUpdate {
    id: string;
    name: string;
    description?: string;
    email: string;
    address: string;
    phone: string;
}

export interface RestaurantUpdateResponse {
    id: string
    name: string
    description?: string
    imageUrl: string
    email: string
    address: string
    ratingValue?: number
    reviewsCount: number
    phone: string
    isActive: boolean
}