import BestDeal from './best-deal/BestDeal'
import { BestDealImageLocation, BestDealsSectionProps } from './best_deals.types'
import './best_deals_section.css'
import 'src/App.css'


const BestDealsSection = ({best_deals, first_deal_image_location} : BestDealsSectionProps) => {

    let current_best_deal_image_location = first_deal_image_location

    return (
        <div className="best__deals__container">
            <div className="best__deals__wrapper section__wrapper">
                <div className="best__deals__list">
                    {best_deals.map((best_deal) => {
                        const component = <BestDeal title={best_deal.title} image_location={current_best_deal_image_location} food_name={best_deal.food_name} description={best_deal.description} image_url={best_deal.image_url}/>
                        current_best_deal_image_location = current_best_deal_image_location === BestDealImageLocation.Left ? BestDealImageLocation.Right : BestDealImageLocation.Left
                        return component
                    })}
                </div>
            </div>
        </div>
    )
}

export default BestDealsSection