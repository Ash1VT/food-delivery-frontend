export enum BestDealImageLocation {
    Left = "LEFT",
    Right = "RIGHT"
}

export type BestDealProps = {
    image_url: string,
    image_location?: BestDealImageLocation,
    title: string,
    food_name: string,
    description: string,
}

export type BestDealsSectionProps = {
    best_deals: BestDealProps[],
    first_deal_image_location: BestDealImageLocation
}