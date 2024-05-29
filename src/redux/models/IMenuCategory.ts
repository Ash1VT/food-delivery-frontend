import IMenuItem from "./IMenuItem"

export default interface IMenuCategory {
    id: string
    name: string
    imageUrl: string
    items: IMenuItem[]
}