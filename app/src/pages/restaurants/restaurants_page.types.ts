import { SearchComponentProps } from "src/components/ui/search-component/search_component.types"
import { SortComponentProps } from "src/components/ui/sort-component/sort_component.types"

export type RestaurantProps = {
    name: string
    description: string
    imageUrl: string
    ratingValue: number
}

export type RestaurantsListProps = {
    restaurants: RestaurantProps[]
}


export type FiltersProps = {
    sortProps: SortComponentProps
    searchProps: SearchComponentProps
}
