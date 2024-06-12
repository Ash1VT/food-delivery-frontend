export interface WorkingHours {
    id: string
    dayOfWeek: string
    openingTime: string
    closingTime: string
    restaurantId: string
}

export interface WorkingHoursCreate {
    dayOfWeek: string
    openingTime: string
    closingTime: string
    restaurantId: string
}

export interface WorkingHoursUpdate {
    id: string
    dayOfWeek: string
    openingTime: string
    closingTime: string
}