import { PromotionElementProps } from '../../../../types/promotion.type';
import './promotion_restaurant.css'


const PromotionRestaurant = (restaurant_promotion: PromotionElementProps) => {
    return (
        <div className="promotion__container">
            <div style={{
                backgroundImage: `url(${restaurant_promotion.image_url})`,
            }} className="promotion__image__wrapper">
                <div className="promotion__discount__wrapper">
                    <div className="promotion__discount__amount">
                        {restaurant_promotion.discount_amount}
                    </div>
                    <div className="promotion__discount__percentage__wrapper">
                        <div className="promotion__discount__percent">
                            %
                        </div>
                        <div className="promotion__discount__text">
                            Off
                        </div>
                    </div>
                </div>
            </div> 
            <div className="promotion__restaurant__wrapper">
                <div className="promotion__restaurant__name">{restaurant_promotion.restaurant_name}</div>
                <div className="promotion__restaurant__days">{restaurant_promotion.promotion_days_remaining} Days Remaining</div>
            </div>       
        </div>
    )
}

export default PromotionRestaurant