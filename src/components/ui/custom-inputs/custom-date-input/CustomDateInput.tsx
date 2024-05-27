import { CustomDateInputProps } from '../custom_inputs.types'
import '../custom_input.css'
import formatDate from 'src/utils/formatDate'

const CustomDateInput = ({label, value, error, setValue}: CustomDateInputProps) => {

    const placeholderString = `Enter your ${label.toLowerCase()}`
    const stringError = error ? String(error) : undefined
    const inputClass = stringError ? 'custom__input custom__input__error' : 'custom__input'

    return (
        <div className="custom__input__container">
            <div className="custom__input__label">{label}</div>
            <input type='date' className={inputClass} placeholder={placeholderString} value={formatDate(value)} onChange={(e) => setValue(new Date(e.target.value))}/>
        </div>
    )
}

export default CustomDateInput