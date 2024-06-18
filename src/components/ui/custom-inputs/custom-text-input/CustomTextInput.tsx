import { CustomTextInputProps } from '../custom_inputs.types'
import '../custom_input.css'

const CustomTextInput = ({label, placeholder, type, value, error, setValue}: CustomTextInputProps) => {

    const inputClass = error ? 'custom__input custom__input__error' : 'custom__input'

    return (
        <div className="custom__input__container">
            {label && <div className="custom__input__label">{label}</div>}
            <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default CustomTextInput