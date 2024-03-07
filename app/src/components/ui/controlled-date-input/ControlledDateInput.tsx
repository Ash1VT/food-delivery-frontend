import ControlledInput from '../controlled-input/ControlledInput'
import { useEffect, useState } from 'react'
import formatDate from 'src/utils/formatDate'
import './controlled_date_input.css'
import { ControlledDateInputProps } from './controlled_date_input.types'

const ControlledDateInput = ({ label, value, onSave }: ControlledDateInputProps) => {
    const [date, setDate] = useState<Date>(value)
    const [editingDate, setEditingDate] = useState<Date>(value)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditingDate(new Date(event.target.value))
    }

    return (
        <ControlledInput label={label} value={date} editingValue={editingDate} setValue={setDate} setEditingValue={setEditingDate} onValueSave={onSave}>
            <input type='date' 
                   value={formatDate(editingDate)} 
                   onChange={onChange}/>
        </ControlledInput>
    )
}

export default ControlledDateInput