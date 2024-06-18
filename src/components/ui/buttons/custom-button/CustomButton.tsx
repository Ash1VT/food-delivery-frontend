import { CustomButtonProps } from './custom_button.types'
import './custom_button.css'

const CustomButton = ({label, className, onClick} : CustomButtonProps) => {
    return (
        <button type="button" className={`button__wrapper custom__button ${className ? className : ''}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default CustomButton