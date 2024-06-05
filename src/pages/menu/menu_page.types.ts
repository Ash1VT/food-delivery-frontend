import IMenuCategory from "src/redux/models/IMenuCategory"
import IMenuItem from "src/redux/models/IMenuItem"

export type MenuItemProps = {
    menuItem: IMenuItem
    onMenuItemClick: (menuItemId: string) => void
}

export type MenuItemsListProps = {
    menuItems: IMenuItem[]
    onMenuItemClick: (menuItemId: string) => void
}


export type MenuCategoryProps = {
    menuCategory: IMenuCategory
    onMenuItemClick: (menuItemId: string) => void
}

export type MenuCategoriesListProps = {
    menuCategories: IMenuCategory[]
    onMenuItemClick: (menuItemId: string) => void
}

export type MenuCategoryNameProps = {
    id: string
    name: string
    imageUrl: string
}

export type MenuCategoriesNamesProps = {
    categoryNames: MenuCategoryNameProps[]
}


export type MenuCategoryRef = {
    id: string
    ref: React.RefObject<HTMLDivElement>
}

export type MenuCategoryActive = {
    id: string

}

export type MenuCategoriesRefsContextProps = {
    categoriesRefs: MenuCategoryRef[]
    setCategoriesRefs: (callback: (prevCategories: MenuCategoryRef[]) => MenuCategoryRef[]) => void
}

export type MenuCategoriesActiveContextProps = {
    activeCategoryId: string
    setActiveCategoryId: (id: string) => void
}

export type AddToCartButtonProps = {
    onAddedToCart: () => void
}

export type RemoveFromCartButtonProps = {
    onRemovedFromCart: () => void
}

// export type MenuCategoryClickProps = {
//     id: bigint
//     setIsClicked: (isClicked: boolean) => void
//     ref: number
// }

// export type MenuCategoriesClicksContext = {
//     clicks: MenuCategoryClickProps[]
//     activeItemId: bigint
//     setActiveItemId: (id: bigint) => void
// }
