import { BestDealOrderButtonProps } from "src/types/buttons.types"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './best_deal_order_button.css'

const BestDealOrderButton = ({onClick} : BestDealOrderButtonProps) => {
    return (
        <div onClick={onClick} 
             role="button" 
             className="button__wrapper best__deals__order__button__wrapper">
                <p className="button__text best__deals__order__button__text">Proceed To Order</p>
                <ArrowForwardIosIcon className="button__icon best__deals__order__button__icon"/>
        </div>
    )
}

export default BestDealOrderButton