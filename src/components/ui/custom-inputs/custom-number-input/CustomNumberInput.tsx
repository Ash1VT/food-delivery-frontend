import { CustomNumberInputProps, CustomTextInputProps } from '../custom_inputs.types'
import '../custom_input.css'

const CustomNumberInput = ({label, placeholder, value, error, setValue}: CustomNumberInputProps) => {

    const inputClass = error ? 'custom__input custom__input__error' : 'custom__input'

    return (
        <div className="custom__input__container">
            {label && <div className="custom__input__label">{label}</div>}
            <input type='number' className={inputClass} placeholder={placeholder} value={value} onChange={(e) => setValue(Number(e.target.value))}/>
        </div>
    )
}

export default CustomNumberInput