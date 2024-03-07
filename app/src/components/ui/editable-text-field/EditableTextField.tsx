import { EditableTextFieldProps } from './editable_text_field.types'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useRef, useState } from 'react'
import './editable_text_field.css'

const EditableTextField = ({ label, value, onSave, ...props }: EditableTextFieldProps) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [text, setText] = useState<string>(value)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!editMode) return
        inputRef?.current?.focus()
    }, [editMode])

    const closeEditMode = () => {
        if (!inputRef.current) return

        inputRef.current.value = text
        setEditMode(false)
    }

    const openEditMode = () => {
        setEditMode(true)
    }

    const handleCancelClick  = () => {
        closeEditMode()
    }
    
    const handleEditClick  = () => {
        openEditMode()
    }
    
    const handleSaveClick = () => {
        setText((previousText) => inputRef.current?.value || previousText)
        setEditMode(false)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        closeEditMode()
    }

    return (
        <div className="textfield__wrapper">
            <div className="textfield__header">
                <label className="textfield__label">{label}</label>
                { editMode ? (
                    <div className="textfield__header__actions">
                        <button className="textfield__header__action button__wrapper" onClick={handleCancelClick}>
                            <CloseIcon onMouseDown = {(e) => e.preventDefault()}/>
                        </button>
                        <button className="textfield__header__action button__wrapper" onClick={handleSaveClick}>
                            <CheckIcon onMouseDown = {(e) => e.preventDefault()}/>
                        </button>
                    </div>) 
                    : 
                    (
                    <button className="textfield__header__action button__wrapper" onClick={handleEditClick}>
                        <EditIcon fontSize='medium' onMouseDown = {(e) => e.preventDefault()}/>
                    </button>
                    )
                }
            </div>
            <input {...props}
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