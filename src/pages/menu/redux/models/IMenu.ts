import IMenuCategory from "./IMenuCategory"

export default interface IMenu {
    id: string
    name: string
    description: string
    restaurantId: string
    menuCategories: IMenuCategory[]
}