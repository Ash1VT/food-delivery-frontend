export type PopularItemProps = {
    image_url: string,
    name: string,
    restaurant_name: string,
    price: number
}

export type PopularItemsSectionProps = {
    items: PopularItemProps[]
}