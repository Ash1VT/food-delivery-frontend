import IMenuItem from "./IMenuItem"

export default interface IMenuCategory {
    id: string
    name: string
    imageUrl: string
    isActive: boolean
    items: IMenuItem[]
}