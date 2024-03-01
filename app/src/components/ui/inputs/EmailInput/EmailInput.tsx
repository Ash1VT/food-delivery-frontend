import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { EmailInputProps } from '../../../../types/input.type';
import './email_input.css'

const EmailInput = ({placeholder, className} : EmailInputProps) => {
    if (!className)
        className = ''

    return (
        <div className={`email__input__wrapper ${className}`}>
            <EmailRoundedIcon className="email__input__icon"/>
            <input className="email__input" placeholder={placeholder}/>
        </div>
    )
}

export default EmailInput