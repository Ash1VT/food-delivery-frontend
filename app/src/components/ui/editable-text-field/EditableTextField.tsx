import { EditableTextFieldProps } from './editable_text_field.types'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useRef, useState } from 'react'
import './editable_text_field.css'

const EditableTextField = ({ id, label, value, ...props }: EditableTextFieldProps) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [text, setText] = useState<string>(value)

    const inputRef = useRef<HTMLInputElement>(null)

    const closeEditMode = () => {
        if (!inputRef.current) return

        inputRef.current.value = text
        setEditMode(false)
    }
    
    const openEditMode = () => {
        setEditMode(true)
    }
    
    const onEditHandler = () => {
        setText((previousText) => inputRef.current?.value || previousText)
        setEditMode(false)
    }

    useEffect(() => {
        if (!editMode) return
        inputRef?.current?.focus()
    }, [editMode])


    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        closeEditMode()
    }

    return (
        <div className="textfield__wrapper">
            <div className="textfield__header">
                <label htmlFor={id}>{label}</label>
                { editMode ? (
                    <div className="textfield__header__actions">
                        <button className="textfield__header__action" onClick={closeEditMode}>
                            <CloseIcon onMouseDown = {(e) => e.preventDefault()}/>
                        </button>
                        <button className="textfield__header__action" onClick={onEditHandler}>
                            <CheckIcon onMouseDown = {(e) => e.preventDefault()}/>
                        </button>
                    </div>) 
                    : 
                    (
                    <button className="textfield__header__action" onClick={openEditMode}>
                        <EditIcon fontSize='medium' onMouseDown = {(e) => e.preventDefault()}/>
                    </button>
                    )
                }
            </div>
            <input  id={id} {...props}
                   readOnly={!editMode} 
                   disabled={!editMode} 
                   ref={inputRef}
                   defaultValue={text}
                   onBlur={handleBlur}
                   className="textfield__input" />
        </div>
    )
}

export default EditableTextField;