export type MenuItemProps = {
    id: bigint
    imageUrl: string
    name: string
    description: string
    ratingValue: number
    reviewsCount: number
    price: number
    categoryId: bigint
}

export type MenuItemsListProps = {
    menuItems: MenuItemProps[]
}


export type MenuCategoryProps = {
    id: bigint
    name: string
    menuItems: MenuItemProps[]
}

export type MenuCategoriesListProps = {
    menuCategories: MenuCategoryProps[]    
}

export type MenuCategoryNameProps = {
    id: bigint
    name: string
    imageUrl: string
    isActive: boolean
}

export type MenuCategoriesNamesProps = {
    categoryNames: MenuCategoryNameProps[]
}


export type MenuCategoryRef = {
    id: bigint
    ref: React.RefObject<HTMLDivElement>
}

export type MenuCategoriesRefsContextProps = {
    categories: MenuCategoryRef[]
    setCategories: (callback: (prevCategories: MenuCategoryRef[]) => MenuCategoryRef[]) => void
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
