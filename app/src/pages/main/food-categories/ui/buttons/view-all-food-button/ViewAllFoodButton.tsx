import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { ViewAllFoodButtonProps } from "src/types/buttons.types"
import './view_all_food_button.css'

const ViewAllFoodButton = ({onClick} : ViewAllFoodButtonProps) => {
    return (
        <div className="button__wrapper view__all__food__button__wrapper" onClick={onClick} role="button">
            <div className="button__text view__all__food__button__text">View All</div>
            <ArrowForwardIosIcon className="button__icon view__all__food__button__icon" viewBox='6 2 8 20'/>
        </div>
    )
}

export default ViewAllFoodButton