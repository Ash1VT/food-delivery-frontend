import { PromotionsSectionProps } from '../types/promotion.type'
import PromotionRestaurant from '../components/PromotionRestaurant'
import '../styles/sections/promotions_section.css'
import '../App.css'


const PromotionsSection = ({promotions} : PromotionsSectionProps) => {
    return (
        <div className="promotions__container">
            <div className="promotions__wrapper section__wrapper">
                <div className="section__title promotions__title">
                    Promotions                
                </div>
                <div className="promotions__list section__list">
                    {promotions.map(
                        (promotion) => {
                            return <PromotionRestaurant image_url={promotion.image_url} 
                                                    discount_amount={promotion.discount_amount} 
                                                    restaurant_name={promotion.restaurant_name} 
                                                    promotion_days_remaining={promotion.promotion_days_remaining}/>
                        })}
                </div>
            </div>
        </div>
    )
}

export default PromotionsSection