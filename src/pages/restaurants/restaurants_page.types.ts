import { SearchComponentProps } from "src/components/ui/search-component/search_component.types"
import { SelectComponentProps } from "src/components/ui/select-component/select_component.types"
import IRestaurant from "src/redux/models/IRestaurant"

export type RestaurantProps = {
    restaurant: IRestaurant
    onRestaurantClick: (restaurantId: string) => void
}

export type RestaurantsListProps = {
    restaurants: IRestaurant[]
    onRestaurantClick: (restaurantId: string) => void
}


export type FiltersProps = {
    sortProps: SelectComponentProps
    searchProps: SearchComponentProps
}
