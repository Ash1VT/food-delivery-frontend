import { WorkingHours } from "./workingHours.interfaces"

export interface Restaurant {
    id: string
    name: string
    description: string
    imageUrl: string
    email: string
    address: string
    phone: string
    ratingValue: number
    reviewsCount: number
    isActive: boolean
    workingHours: WorkingHours[]
}

export interface RestaurantUpdate {
    id: string;
    name: string;
    description?: string;
    email: string;
    address: string;
    phone: string;
}