import { MouseEvent } from 'react'
import BestDealOrderButton from '../ui/buttons/best-deal-order-button/BestDealOrderButton'
import { BestDealImageLocation, BestDealProps } from '../best_deals.types'

import './best_deal.css'


const image_location_rule = {
    [BestDealImageLocation.Left]: 'best__deal__container__straight',
    [BestDealImageLocation.Right]: 'best__deal__container__reverse'
}

const BestDeal = ({image_url, image_location=BestDealImageLocation.Left, title, food_name, description} : BestDealProps) => {

    const onClick = (e: MouseEvent) => {
        console.log('ordered!')
    }
    
    return (
        <div className={`best__deal__container ${image_location_rule[image_location]}`}>
            <div className="best__deal__wrapper">
                <div className="best__deal__details__wrapper">
                    <div className="best__deal__title__wrapper">
                        <span className="best__deal__title">{title} </span>
                        <span className="best__deal__title__food">{food_name}</span>
                    </div>
                    <div className="best__deal__details">{description}</div>
                </div>
                <BestDealOrderButton onClick={onClick}/>
            </div>
            <div  className="best__deal__image__wrapper">
                <img src={image_url} alt="image" />
            </div>
        </div>
    )
}

export default BestDeal