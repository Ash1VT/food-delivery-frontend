import { FindFoodButtonProps } from 'src/types/buttons.types'
import SearchIcon from '@mui/icons-material/Search'
import './find_food_button.css'

const FindFoodButton = ({onClick}: FindFoodButtonProps) => {
    return (
        <div onClick={onClick} 
             role="button" 
             className="button__wrapper find__food__button__wrapper">
                <SearchIcon className="button__icon find__food__button__icon"/>
                <p className="button__text find__food__button__text">Find Food</p>
        </div>
    )
}

export default FindFoodButton