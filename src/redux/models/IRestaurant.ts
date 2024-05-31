import IWorkingHours from "./IWorkingHours"

export default interface IRestaurant {
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
    workingHours: IWorkingHours[]
}