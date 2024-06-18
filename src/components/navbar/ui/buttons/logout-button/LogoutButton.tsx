import LogoutIcon from '@mui/icons-material/Logout';
import { LogoutButtonProps } from 'src/components/navbar/navbar.types';
import './logout_button.css'

const LogoutButton = ({onClick} : LogoutButtonProps) => {
    return (
        <button className="button__wrapper logout__button" onClick={onClick}>
            Logout
            <LogoutIcon className="button__icon logout__button__icon"/>
        </button>
    )
}

export default LogoutButton