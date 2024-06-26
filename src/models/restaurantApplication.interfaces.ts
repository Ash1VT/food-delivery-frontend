export interface RestaurantApplication {
    id: string
    name: string
    description: string
    address: string
    email: string
    phone: string
    type: string
    restaurantManagerId: string
}

export interface RestaurantApplicationUpdate {
    id: string
    name: string
    description: string
    address: string
    email: string
    phone: string
}