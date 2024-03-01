import PopularItem from './popular-item/PopularItem'
import { PopularItemsSectionProps } from '../../../types/item.type'
import { ArrowDirection } from '../../../types/slider.type' 
import ArrowSlider from '../../../components/ui/sliders/arrow-slider/ArrowSlider'

import './popular_items_section.css'
import '../App.css'

const PopularItemsSection = ({items}: PopularItemsSectionProps) => {

    return (
        <div className="popular__items__container">
            <div className="popular__items__wrapper section__wrapper">
                <div className="section__title popular__items__title">Popular items</div>
                    <div className="popular__items__list__wrapper">
                        <ArrowSlider arrow_direction={ArrowDirection.Left}/>
                        <div className="popular__items__list section__list">
                            {items.map((item) =>{
                                return <PopularItem image_url={item.image_url} name={item.name} restaurant_name={item.restaurant_name} price={item.price}/>
                            })}
                        </div>
                        <ArrowSlider arrow_direction={ArrowDirection.Right}/>
                    </div>
            </div>
        </div>
    )
}

export default PopularItemsSection