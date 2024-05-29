import IWorkingHours from "./IWorkingHours"

export default interface IRestaurant {
    id: string
    name: string
    description: string
    imageUrl: string
    address: string
    ratingValue: number
    reviewsCount: number
    workingHours: IWorkingHours[]
}