import { MenuCategory } from "src/models/menuCategory.interfaces"
import { MenuItem } from "src/models/menuItem.interfaces"
import { User } from "src/models/user.interfaces"

export type MenuItemProps = {
    currentUser?: User | undefined | null
    menuItem: MenuItem
    categoryName: string
    onMenuItemClick: (menuItemId: string) => void
}

export type MenuItemsListProps = {
    currentUser?: User | undefined | null
    menuItems: MenuItem[]
    categoryName: string
    onMenuItemClick: (menuItemId: string) => void
}


export type MenuCategoryProps = {
    currentUser?: User | undefined | null
    menuCategory: MenuCategory
    onMenuItemClick: (menuItemId: string) => void
}

export type MenuCategoriesListProps = {
    currentUser?: User | undefined | null
    menuCategories: MenuCategory[]
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


// UI

export type AddToCartButtonProps = {
    onAddedToCart: () => void
}

export type RemoveFromCartButtonProps = {
    onRemovedFromCart: () => void
}

export type BackToRestaurantsButtonProps = {
    onBackToRestaurants: () => void
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
