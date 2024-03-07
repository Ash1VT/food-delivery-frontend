import { ControlledTextInputProps } from './controlled_text_input.types'
import { useEffect, useState } from 'react'
import ControlledInput from '../controlled-input/ControlledInput';
import './controlled_text_input.css'

const ControlledTextInput = ({ label, value, onSave }: ControlledTextInputProps) => {
    const [text, setText] = useState<string>(value)
    const [editingText, setEditingText] = useState<string>(value)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditingText(event.target.value)
    }

    return (
        <ControlledInput label={label} value={text} editingValue={editingText} setValue={setText} setEditingValue={setEditingText} onValueSave={onSave}>
            <input
                type='text'
                value={editingText}
                onChange={onChange}/>
        </ControlledInput>
    )
}

export default ControlledTextInput;