import PhoneInput from 'react-phone-input-2'
import { CustomPhoneInputProps } from '../custom_inputs.types'
import '../custom_input.css'
import './custom_phone_input.css'

const CustomPhoneInput = ({label, country, error, value, setValue}: CustomPhoneInputProps) => {

    const placeholderString = `Enter your ${label.toLowerCase()}`
    const containerClass = error ? 'custom__phone__container custom__input__error ' : 'custom__phone__container'

    return (
        <div className="custom__input__container">
            <div className="custom__input__label">{label}</div>
            <PhoneInput inputClass='custom__input custom__phone__input' containerClass={containerClass} buttonClass="custom__phone__dropdown" country={country} countryCodeEditable={false} disableDropdown={true} placeholder={placeholderString} value={value} onChange={(phone) => setValue(phone)}/>
        </div>
    )
}

export default CustomPhoneInput