import { MouseEventHandler, ReactElement, ComponentType } from "react"

export type PushableButtonProps = {
    onClick: MouseEventHandler<HTMLElement>,
    text: string,
    edje_color: string,
    content_color: string,
    background_color: string,
    font_family: string,
    font_size: number,
    font_weight: number,
    left_side_elements?: ComponentType[],
    right_side_elements?: ComponentType[]
}

export type BaseButtonProps = {
    onClick: MouseEventHandler<HTMLElement>
}

export type LoginButtonProps = {
} & BaseButtonProps

export type FindFoodButtonProps = {
} & BaseButtonProps

export type OrderButtonProps = {
} & BaseButtonProps

export type ViewAllFoodButtonProps = {
} & BaseButtonProps

export type BestDealOrderButtonProps = {
} & BaseButtonProps

export type SubscribeButtonProps = {
    className?: string
} & BaseButtonProps