import ArrowSlider from "../../../components/ui/arrow-slider/ArrowSlider"
import FoodCategory from "./food-category/FoodCategory"
import ViewAllFoodButton from "./ui/buttons/view-all-food-button/ViewAllFoodButton"
import { FoodCategoriesSectionProps } from "./food_category.types"
import { ArrowDirection } from "../../../components/ui/arrow-slider/arrow_slider.types"
import './food_categories_section.css'
import 'src/App.css'

const FoodCategoriesSection = ({categories} : FoodCategoriesSectionProps) => {

    const onClick = () => {
        console.log('Click!');
    }

    return (
        <div className="food__categories__container">
            <div className="food__categories__wrapper section__wrapper">
                <div className="food__categories__header">
                    <div className="food__categories__title">Search By Food</div>
                    <div className="food__categories__buttons__wrapper">
                        <ViewAllFoodButton onClick={onClick}/>
                        <div className="food__categories__sliders">
                            <ArrowSlider arrow_direction={ArrowDirection.Left}/>
                            <ArrowSlider arrow_direction={ArrowDirection.Right}/>
                        </div>
                    </div>
                </div>
                <div className="food__categories__list section__list">
                    {categories.map((category) =>{
                        return <FoodCategory image_url={category.image_url} name={category.name}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FoodCategoriesSection