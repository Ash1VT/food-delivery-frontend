import { SearchComponentProps } from "src/components/ui/search-component/search_component.types"
import { SelectComponentProps } from "src/components/ui/select-component/select_component.types"

export type RestaurantProps = {
    id: string
    name: string
    description: string
    imageUrl: string
    ratingValue: number
}

export type RestaurantsListProps = {
    restaurants: RestaurantProps[]
}


export type FiltersProps = {
    sortProps: SelectComponentProps
    searchProps: SearchComponentProps
}
