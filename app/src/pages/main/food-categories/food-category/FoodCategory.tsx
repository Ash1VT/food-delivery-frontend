import { FoodCategoryProps } from '../food_category.types'
import './food_category.css'

const FoodCategory = ({image_url, name} : FoodCategoryProps) => {
    return (
        <div className="food__category__container">
            <div  className="food__category__image__wrapper">
                <img src={image_url} alt="image" />
            </div>
            <div className="food__category__details">
                <div className="food__category__name">
                    {name}
                </div>
            </div>
        </div>
    )
}
//style={{backgroundImage: `url(${image_url})`}}
export default FoodCategory