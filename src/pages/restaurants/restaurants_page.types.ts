import { SearchComponentProps } from "src/components/ui/search-component/search_component.types"
import { SelectComponentProps } from "src/components/ui/select-component/select_component.types"
import { Restaurant } from "src/models/restaurant.interfaces"

export type RestaurantProps = {
    restaurant: Restaurant
    onRestaurantClick: (restaurantId: string) => void
}

export type RestaurantsListProps = {
    restaurants: Restaurant[]
    onRestaurantClick: (restaurantId: string) => void
}


export type FiltersProps = {
    sortProps: SelectComponentProps
    searchProps: SearchComponentProps
}
