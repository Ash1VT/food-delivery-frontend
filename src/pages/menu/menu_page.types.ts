export type MenuItemProps = {
    id: string
    imageUrl: string
    name: string
    description: string
    categoryName: string
    ratingValue: number
    reviewsCount: number
    price: number
}

export type MenuItemsListProps = {
    items: MenuItemProps[]
}


export type MenuCategoryProps = {
    id: string
    name: string
    items: MenuItemProps[]
}

export type MenuCategoriesListProps = {
    menuCategories: MenuCategoryProps[]    
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
