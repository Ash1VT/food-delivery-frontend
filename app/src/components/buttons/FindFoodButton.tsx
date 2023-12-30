import { FindFoodButtonProps } from '../../types/button.type'
import SearchIcon from '@mui/icons-material/Search'

import '../../styles/buttons/find_food_button.css'

const FindFoodButton = ({onClick}: FindFoodButtonProps) => {
    return (
        <div onClick={onClick} 
             role="button" 
             className="find__food__button__wrapper">
                <SearchIcon className="find__food__button__icon"/>
                <p className="find__food__button__text">Find Food</p>
        </div>
    )
}

export default FindFoodButton