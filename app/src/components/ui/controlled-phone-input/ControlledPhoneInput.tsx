import { ControlledPhoneInputProps } from './controlled_phone_input.types'
import { useState } from 'react'
import ControlledInput from '../controlled-input/ControlledInput'
import './controlled_phone_input.css'

const ControlledPhoneInput = ({label, value, onSave} : ControlledPhoneInputProps) => {
    const [phone, setPhone] = useState<string>(value)
    const [editingPhone, setEditingPhone] = useState<string>(value)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditingPhone(event.target.value)
    }

    return (
        <ControlledInput label={label} value={phone} editingValue={editingPhone} setValue={setPhone} setEditingValue={setEditingPhone} onValueSave={onSave}>
            <input
                type='tel'
                value={editingPhone}
                onChange={onChange}/>
        </ControlledInput>
    )
}

export default ControlledPhoneInput