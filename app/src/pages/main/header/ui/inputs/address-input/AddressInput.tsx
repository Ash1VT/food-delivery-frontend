import PlaceIcon from "@mui/icons-material/Place"
import { AddressInputProps } from "src/types/inputs.type"

import './address_input.css'

const AddressInput = ({placeholder, className} : AddressInputProps) => {
    if (!className)
        className = ''

    return (
        <div className="address__input__wrapper">
            <PlaceIcon className="address__input__icon"/>
            <input className="address__input" placeholder={placeholder}/>
        </div>
    )
}

export default AddressInput