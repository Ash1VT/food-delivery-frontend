import PlaceIcon from "@mui/icons-material/Place"
import { AddressInputProps } from "src/types/inputs.type"

import './address_input.css'

const AddressInput = ({value, setValue,placeholder, className} : AddressInputProps) => {
    if (!className)
        className = ''

    return (
        <div className={`address__input__wrapper ${className}`}>
            <PlaceIcon className="address__input__icon"/>
            <input className="address__input" placeholder={placeholder} value={value} onChange={(event) => setValue(event.target.value)}/>
        </div>
    )
}

export default AddressInput