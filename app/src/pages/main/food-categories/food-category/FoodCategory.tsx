import { FoodCategoryProps } from '../../../../types/food_category.type'
import './food_category.css'

const FoodCategory = ({image_url, name} : FoodCategoryProps) => {
    return (
        <div className="food__category__container">
            <div style={{backgroundImage: `url(${image_url})`}} className="food__category__image__wrapper"/>
            <div className="food__category__details">
                <div className="food__category__name">
                    {name}
                </div>
            </div>
        </div>
    )
}

export default FoodCategory