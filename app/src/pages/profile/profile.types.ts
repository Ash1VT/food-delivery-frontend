import { ReactElement, ReactNode } from "react"

export type ProfileCategoryProps = {
    id: number
    name: string
}

export type ProfileCategoryClick = {
    id: number
    setIsClicked: (isClicked: boolean) => void
}

export type ProfileCategoryClicksContextProps = {
    profileCategoryClicks: ProfileCategoryClick[]
    activeCategoryId: number
    setActiveCategoryId: (id: number) => void
}