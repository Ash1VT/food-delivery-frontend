import { BestDealOrderButtonProps } from "../../types/button.type"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import '../../styles/buttons/best_deal_order_button.css'

const BestDealOrderButton = ({onClick} : BestDealOrderButtonProps) => {
    return (
        <div onClick={onClick} 
             role="button" 
             className="best__deals__order__button__wrapper">
                <p className="best__deals__order__button__text">Proceed To Order</p>
                <ArrowForwardIosIcon className="best__deals__order__button__icon"/>
        </div>
    )
}

export default BestDealOrderButton