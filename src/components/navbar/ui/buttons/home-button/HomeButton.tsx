import { HomeButtonProps } from 'src/components/navbar/navbar.types'
import HomeIcon from '@mui/icons-material/Home';
import './home_button.css'


const HomeButton = ({onClick} : HomeButtonProps) => {
    return (
        <button className="button__wrapper home__button" onClick={onClick}>
            <HomeIcon className="button__icon home__button__icon"/>
        </button>
    )
}

export default HomeButton