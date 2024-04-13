import { LoginButtonProps } from 'src/types/buttons.types'
import PersonIcon from '@mui/icons-material/Person'
import './login_button.css'

const LoginButton = ({onClick}: LoginButtonProps) => {
    return (
        <button className="login__button__wrapper" role="button" onClick={onClick}>
            <span className="login__button__shadow"/>
            <span className="login__button__edge"/>
            <span className="login__button__front">
                <PersonIcon className="login__button__icon"/>
                <p className="login__button__text">Login</p>
            </span>
        </button>
    )
}

export default LoginButton